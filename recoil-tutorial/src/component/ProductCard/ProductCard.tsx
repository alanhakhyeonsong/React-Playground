import React from 'react';
import styled from 'styled-components';
import dummyImage from '../../assets/galback.png';
import { useRecoilState } from 'recoil';
import { CartAtom } from '../../recoil/CartAtom';
import { Product } from '../../types/Product';

const ProductCard = ({ data }: { data: Product }) => {
  const { id, price, title, description } = data;

  const [cartItem, setCartItem] = useRecoilState(CartAtom);

  const isAlreadyInCart = cartItem.findIndex((e: Product) => e.id === id) !== -1;

  const addToCart = () => {
    if (!isAlreadyInCart) {
      setCartItem((prev) => [...prev, data] as Product[]);
    }
  };

  return (
    <Wrapper>
      <img width={276} height={276} src={dummyImage} alt={`${id}의 더미이미지`} />
      <Price>{price.toLocaleString()}원</Price>
      <Heading>{title}</Heading>
      <MaxLine1>{description}</MaxLine1>
      <Button onClick={addToCart} disabled={isAlreadyInCart}>
        {isAlreadyInCart ? '장바구니에 추가됐습니다.' : '장바구니에 추가'}
      </Button>
    </Wrapper>
  );
};

const Price = styled.span`
  font-size: 20px;
  color: var(--font-black);
  font-weight: var(--bold);
`;
const Wrapper = styled.div`
  padding: 16px;
  width: 310px;
  height: 100%;
  border: 1px solid var(--line-gray);
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
const MaxLine1 = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Button = styled.button`
  padding: 8px;
  color: #000;
  background-color: var(--main);
  &:disabled {
    background-color: var(--line-gray);
    color: var(--font-gray);
  }
`;
export const Heading = styled.span`
  font-size: 18px;
  font-weight: var(--bold);
`;

export default ProductCard;