import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./BookForm.css";

function BookForm() {
  const [book, setBook] = useState([]);

  return (
    <Form>
      <h2 className="head">Book Form</h2>
      <Row className="m-2">
        <Form.Group as={Col} controlId="formGridBookName">
          <Form.Label>Название книги</Form.Label>
          <Form.Control type="bookname" placeholder="Кобзарь" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridAuthorName">
          <Form.Label>Автор</Form.Label>
          <Form.Control type="AuthorName" placeholder="Тарас Шевченко" />
        </Form.Group>
      </Row>

      <Form.Group className="m-3" controlId="formGrid">
        <Form.Label>Описание</Form.Label>
        <Form.Control as="textarea" rows={2} />
      </Form.Group>

      {["Фантастика", "Детектив", "Драма"].map((label) => (
        <Form.Check
          className="m-3"
          inline
          label={label}
          type="checkbox"
          id={`inline-${label}-3`}
        />
      ))}

      <Row className="m-2">
        <Form.Group as={Col} controlId="formGridCost">
          <Form.Label>Стоимость</Form.Label>
          <Form.Control type="number" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLanguage">
          <Form.Label htmlFor="disabledSelect">Язык</Form.Label>
          <Form.Select id="disabledSelect">
            <option>Украинский</option>
            <option>Английский</option>
          </Form.Select>
        </Form.Group>

        <div className="m-2">Наличие</div>
        <div className="availability">
          {["Есть", "Нету"].map((label) => (
            <div
              key={`inline-${label}`}
              className="m-1
          "
            >
              <Form.Check
                inline
                name="group1"
                label={label}
                type="radio"
                id={`inline-${label}-1`}
              />
            </div>
          ))}
        </div>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Control type="file" size="sm" />
        </Form.Group>
        <div className="buttons">
          <Button type="Delete">Очистить форму</Button>
          <Button type="Checkbox">Чекбокс</Button>
          <Button type="Alert">Предпросмотр</Button>
        </div>
      </Row>
    </Form>
  );
}

export default BookForm;
