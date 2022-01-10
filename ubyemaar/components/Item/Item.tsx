import styled from "styled-components";

type ItemProps = {
  title: string;
  image: React.ReactNode;
  isActive?: boolean;
  onClick?(): void;
};

const ItemStyled = styled.div<ItemProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: ${({ isActive }) => !isActive && 0.3};
  padding: 1.2rem 2.1rem;
  border-radius: 50%;
  border: 1px black;
  box-shadow: 1rem 1rem 2rem ${({ theme }) => theme.colors.silverChalice + "1A"};
  .image,
  .image > * {
    width: 100%;
  }
  .title {
    text-transform: capitalize;
    line-height: 1.2rem;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.black};
    margin-top: 0.8rem;
  }
`;

const Item: React.VFC<ItemProps> = (props) => {
  const { title, image, onClick } = props;
  return (
    <ItemStyled {...props} onClick={onClick}>
      <span className="image">{image}</span>
      <p className="title">{title}</p>
    </ItemStyled>
  );
};

export default Item;
