import { useState } from "react";
import { IQuiz } from "../../interfaces/IQuiz";
import CustomInput from "../../components/CustomInput";
import { AddQuizStyled, AddQuizTitleStyled } from "./styles";
import Separator from "../../components/Separator";
import RowContainer from "../../components/RowContainer";
import CustomButton from "../../components/CustomButton";

const Adicionar = () => {
  const [quiz, setQuiz] = useState<IQuiz>({
    id: 0,
    title: "",
    description: "",
    questions: [],
    id_user: 1,
    id_gender: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | null) => {
    if (!e || !e.target) {
      return;
    }

    const { name, value } = e.target;
    if (name === undefined || value === undefined) {
      return;
    }

    setQuiz((prevState: IQuiz) => ({ ...prevState, [name]: value }));
  };

  return (
    <AddQuizStyled>
      <AddQuizTitleStyled>Adicionar QUIZ</AddQuizTitleStyled>
      <CustomInput
        text="Título:"
        type="text"
        name="title"
        value={quiz?.title}
        onChange={handleChange}
      />

      <CustomInput
        text="Descricão:"
        type="text"
        name="description"
        value={quiz?.description}
        onChange={handleChange}
      />

      <Separator width="100%" />

      <RowContainer justifyContent="center">
        <CustomButton text="Adicionar" onClick={() => console.log(quiz)} />
      </RowContainer>
    </AddQuizStyled>
  );
};

export default Adicionar;
