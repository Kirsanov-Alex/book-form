import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./BookForm.css";

function BookForm() {
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

      {['checkbox'].map((type) => (
        <div key={`inline-${type}`} className="m-3">
          <Form.Check
            inline
            label="фантастика"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="детектив"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="драма"
            type={type}
            id={`inline-${type}-3`}
          />
        </div>
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
        {["radio"].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Есть"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="Нету"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
          </div>
        ))}

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
