import React from "react";
import { Col, Modal, ModalProps, Row } from "react-bootstrap";

import * as S from "./styles";

interface ProductProps {
  name: string;
  image_url: string;
  type: string;
  price: number;
  seller: string;
  available_sizes: string[];
  details: string;
  sport: string;
}

interface ProductModalProps extends ModalProps {
  product?: ProductProps;
}

export default function ProductModal({ product, ...props }: ProductModalProps) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Detalhes do produto
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {product ? (
          <Row>
            <Col xs={5}>
              <img src={product.image_url} width="100%" alt={product.name} />
            </Col>
            <Col>
              <S.ProductModalTitle>{product.name}</S.ProductModalTitle>
              <S.ProductModalSubtitle className="text-secondary">
                {product.type}
              </S.ProductModalSubtitle>
              <p>{product.details}</p>
              <S.ProductModalInfo>
                {product.available_sizes.length > 0 ? (
                  <li>
                    <b>Tamanhos disponíveis</b>:{" "}
                    {product.available_sizes.join(", ")}{" "}
                  </li>
                ) : null}
                <li>
                  <b>Marca</b>: {product.seller}{" "}
                </li>
                <li>
                  <b>Esporte</b>: {product.sport}{" "}
                </li>
              </S.ProductModalInfo>
              <div className="d-flex align-items-center justify-content-end mt-5">
                <S.ProductModalPrice className="text-success">
                  R$ {product.price.toLocaleString("pt-BR")}
                </S.ProductModalPrice>
                <S.ProductModalButton className="ml-2 d-inline-block">
                  Adicionar ao carrinho
                </S.ProductModalButton>
              </div>
            </Col>
          </Row>
        ) : null}
      </Modal.Body>
    </Modal>
  );
}
