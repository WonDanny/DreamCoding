import './style/AppMentor.css'
import { useReducer } from 'react';
import { personReducer } from '../reducer/person-reducer';

export const AppMentor = () => {
    // const [person, setPerson] = useState(initialPerson);
    const [person, dispatch] = useReducer(personReducer, initialPerson);
    
    const handleNameChange = () => {
        const selectedName = prompt(`누구의 이름을 바꾸시겠습니까?`);
        const changedName = prompt(`이름을 무엇으로 바꾸시겠습니까?`);

        dispatch({type: 'update', selectedName, changedName});
    }

    const handleAddMentor = () => {
        const newMentorName = prompt(`추가할 멘토의 이름을 입력하세요.`);
        const newMentorJob = prompt(`추가할 멘토의 직업을 입력하세요.`);

        dispatch({type: 'added', newMentorName, newMentorJob});
    }

    const handleDeleteMentor = () => {
        const deleteMentorName = prompt(`누구삭제?`);
        
        dispatch({type: 'delete', deleteMentorName})
    }

    return (
        <div 
            className='container' 
            style={{
                width: '1200px', display: 'flex', justifyContent: 'center', margin: 'auto',
                alignItems: 'center', flexDirection: 'column', 
        }}>
            <div className="person">
                <h1>{person.name}는 {person.job}</h1>
                <p>{person.name} 의 멘토는</p>
                <ul>
                    {person && person.mentors.map((mentor, index) => {
                        return (
                            <li key={index} style={{fontSize: '20px', marginBottom: '10px'}}>
                                {`${mentor.name} (${mentor.job})`}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className='btnGroup'>
                <button className="nameChange" type='button' onClick={handleNameChange}>멘토이름 변경</button>
                <button className='addMentor' type='button'onClick={handleAddMentor}>멘토 추가</button>
                <button className="deleteMentor" type='button' onClick={handleDeleteMentor}>멘토 삭제</button>
            </div>
        </div>
    );
};

const initialPerson = {
    name: 'danny',
    job: '개발자',
    mentors: [
        {name: 'hiz', job: '20년차 개발자'},
        {name: 'jude', job: '10년차 개발자'},
    ]
}