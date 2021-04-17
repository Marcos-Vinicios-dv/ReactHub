import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;

    display: flex;
    flex-direction: row;
    align-items: center;

    svg{
      margin-right: 10px;
    }
  }
`;
export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;

    border: 1px solid #eee;
    border-radius: 4px;

    padding: 10px 15px;

    font-size: 16px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// podemos passar propriedades a um element usando o attrs({ atributo})
export const SubmitButton = styled.button.attrs( props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  // & referencia o elemento atual
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  // basicamente o elemento 'css' serve para que eu possa adiconar um
  // conjunto de propriedades css baseado em alguma propiredade(PROPS) do elemento

  // em um comaparativo eu não conseguiria passar um conjunto de propriedades css
  // por inteiro, mas com o elemento 'css' do styled-components isso é possivel
  ${ props => props.loading && css`
    svg {
      animation: ${rotate} 1s linear infinite;
    }
  `}
`;


export const List = styled.ul `
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    // esta intrução idica que o estilo sera aplicado a todos os li's que tiverem
    // um li anterior, ou seja todos menos o primeiro já que não existe um li antes
    // do primeiro
    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: #7159c1;
      text-decoration: none;
    }
  }
`;
