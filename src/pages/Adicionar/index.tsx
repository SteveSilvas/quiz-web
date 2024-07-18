import { useState } from "react";
import { IQuiz } from "../../interfaces/IQuiz";
import CustomInput from "../../components/CustomInput";

const Adicionar = () => {
    const [quiz, setQuiz] = useState<IQuiz>({
        id: 0,
        title: '',
        description: '',
        questions: [],
        id_user: 1,
        id_gender: 1
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
        <div>
            <h1 style={{ textAlign: 'center', width: '100%' }}>
                Adicionar QUIZ
            </h1>
            <CustomInput
                text="Título:"
                type="text"
                name="title"
                value={quiz?.title}
                onChange={handleChange} />
        
            <CustomInput
                text="Descricão:"
                type="text"
                name="description"
                value={quiz?.description}
                onChange={handleChange} />
        </div>
    );
};

export default Adicionar;