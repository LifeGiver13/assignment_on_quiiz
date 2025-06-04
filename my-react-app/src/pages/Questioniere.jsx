import { useParams } from 'react-router-dom';
import QuestionnaireForm from '../components/QuestionaireForm';
export default function Quiz() {
    const { id } = useParams();

    return (
        <div>
            <h1>Take the Quiz</h1>
            <QuestionnaireForm id={id} />
        </div>
    );
}
