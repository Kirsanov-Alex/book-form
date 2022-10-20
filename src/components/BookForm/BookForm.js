import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./BookForm.css";
import {emptyBook, GENRES, AVAILABILITIES} from "../constants"

function BookForm() {

  const [book, setBook] = useState(emptyBook);

  const onChangeCheckbox = (outputId) => {
    const position = book.genre.indexOf(outputId);
    if (position > -1) {
      book.genre.splice(position, 1);
    } else {
      book.genre.push(outputId);
    }
    setBook({ ...book });
  };

  const onChangeForm = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const onImageChange = (e) => {
    if (e.target.files && e.target.files.length) {
      const img = e.target.files[0];
      setBook({ ...book, file: URL.createObjectURL(img) });
    }
  };

  const deleteForm = () => {
    setBook(emptyBook);
  };

  const checkAll = () => {
    if (book.genre.length === GENRES.length) {
      book.genre.splice(0);
    } else {
      GENRES.forEach(({ id }) => {
        if (book.genre.indexOf(id) === -1) {
          book.genre.push(id);
        }
      });
    }
    setBook({ ...book });
  };

  const previewForm = () => {
    alert(`
    Название книги : ${book.bookName}
    Автор : ${book.authorName}
    Описание : ${book.discription}
    Жанр : ${book.genre}
    Стоимость : ${book.cost} грн
    Язык : ${book.language}
    Наличие : ${book.availability}
    `);
  };

  return (
    <Form>
      <h2 className="head">Book Form</h2>
      <Row className="m-2">
        <Form.Group as={Col} controlId="formGridBookName">
          <Form.Label>Название книги</Form.Label>
          <Form.Control
            value={book.bookName}
            onChange={onChangeForm}
            name="bookName"
            placeholder="Кобзарь"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridAuthorName">
          <Form.Label>Автор</Form.Label>
          <Form.Control
            value={book.authorName}
            onChange={onChangeForm}
            name="authorName"
            placeholder="Тарас Шевченко"
          />
        </Form.Group>
      </Row>

      <Form.Group className="m-3" controlId="formGrid">
        <Form.Label>Описание</Form.Label>
        <Form.Control
          value={book.discription}
          name="discription"
          onChange={onChangeForm}
          as="textarea"
          rows={2}
        />
      </Form.Group>

      {GENRES.map(({ id }) => (
        <Form.Check
          value={book.genre}
          name="genre"
          key={id}
          className="m-3"
          inline
          label={id}
          type="checkbox"
          id={`inline-${id}-3`}
          onChange={() => onChangeCheckbox(id)}
          checked={book.genre.indexOf(id) > -1}
        />
      ))}
      <Button onClick={() => checkAll()}>Чекбокс</Button>

      <Row className="m-2">
        <Form.Group as={Col} controlId="formGridCost">
          <Form.Label>Стоимость</Form.Label>
          <Form.Control
            value={book.cost}
            name="cost"
            onChange={onChangeForm}
            type="number"
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLanguage">
          <Form.Label>Язык</Form.Label>
          <Form.Select
            value={book.language}
            name="language"
            onChange={onChangeForm}
            id="disabledSelect"
          >
            <option disabled></option>
            <option>Украинский</option>
            <option>Английский</option>
          </Form.Select>
        </Form.Group>

        <div className="m-2">Наличие</div>
        <div className="availability">
          {AVAILABILITIES.map(({ label, value }) => (
            <div key={label} className="m-1">
              <Form.Check
                value={value}
                onChange={onChangeForm}
                inline
                name="availability"
                label={label}
                type="radio"
                checked={book.availability === value}
              />
            </div>
          ))}
        </div>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Control
            name="file"
            type="file"
            onChange={onImageChange}
            size="sm"
          />
          {book.file ? (
            <img className="image" alt="" src={book.file} />
          ) : (
            <span>Файл не выбран</span>
          )}
          {/* <img
            className="image"
            src={book.file ? book.file : "no_photo.jpg"}
            alt="Файл не выбран"
          /> */}
        </Form.Group>

        <div className="buttons">
          <Button onClick={deleteForm}>Очистить форму</Button>
          <Button type="preview" onClick={previewForm}>
            Предпросмотр
          </Button>
        </div>
      </Row>
    </Form>
  );
}

export default BookForm;
