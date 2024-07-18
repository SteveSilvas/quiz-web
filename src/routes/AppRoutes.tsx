import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout';
import App from '../pages/App';
import Explorar from '../pages/Explorar';
import MeusQuiz from '../pages/MeusQuiz';
import Adicionar from '../pages/Adicionar';
import Favoritos from '../pages/Favoritos';
import QuizDetail from '../pages/QuizDetail';

const AppRoutes = () => {
    return (
        <Routes >
            <Route path="/" element={<Layout />}>
                <Route index element={<App />} />
                <Route path="explorar" element={<Explorar />} />
                <Route path="meus-quiz" element={<MeusQuiz />} />
                <Route path="quiz-detail/:id" element={<QuizDetail />} />
                <Route path="adicionar" element={<Adicionar />} />
                <Route path="favoritos" element={<Favoritos />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes;