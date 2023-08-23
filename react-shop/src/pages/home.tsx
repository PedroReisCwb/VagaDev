import React, { useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import { BoxFilter } from "../components/box-filter";
import ProductModal from "../components/modals/product-modal";
import Product from "../components/product";
import { IProduct, useProducts } from "../hooks/products";
import LayoutDefault from "../layouts/default";

export default function Home() {
  const { products, categories, sizes, setFilter, filter } = useProducts();
  const [activeProduct, setActiveProduct] = useState<IProduct>();
  const [showModal, setShowModal] = useState(false);

  function onChangeCategory(value: string) {
    setFilter({
      size: filter.size,
      category: value,
    });
  }

  function onChangeSize(value: string) {
    const newSize = value === filter.size ? "" : value;
    setFilter({
      size: newSize,
      category: filter.category,
    });
  }

  function onProductClick(product: IProduct) {
    setActiveProduct({ ...product });
    setShowModal(true);
  }

  return (
    <>
      <LayoutDefault>
        <Container className="mt-5">
          <p>{products.length} registros encontrados</p>
          <Row>
            <Col md={3}>
              <p className="mb-2">Categoria:</p>
              <Form.Select onChange={(e) => onChangeCategory(e.target.value)}>
                <option value="">Todos</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Form.Select>
              <p className="mb-2 mt-3">Tamanho:</p>
              <BoxFilter
                values={sizes}
                currentValue={filter.size}
                onChangeValue={(size) => onChangeSize(size)}
              />
            </Col>
            <Col>
              <Row>
                {products.map((product) => (
                  <Col sm={6} lg={3} key={product.name}>
                    <Product
                      image_url={product.image_url}
                      name={product.name}
                      price={product.price}
                      type={product.type}
                      onClick={() => onProductClick(product)}
                    />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </LayoutDefault>
      <ProductModal
        show={showModal}
        product={activeProduct}
        onHide={() => setShowModal(false)}
      />
    </>
  );
}
