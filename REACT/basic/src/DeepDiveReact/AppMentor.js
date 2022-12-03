import './style/AppMentor.css'
import { useReducer, useState } from 'react';
import personReducer from '../reducer/person-reducer';

const initialPerson = {
    name: 'danny',
    job: '개발자',
    mentors: [
        {
            name: 'hiz',
            job: '20년차 개발자'
        },
        {
            name: 'jude',
            job: '10년차 개발자'
        }
    ]
};

export const AppMentor = () => {
    
    const [person, setPerson] = useState(initialPerson);
    // const [person, dispatch] = useReducer(personReducer, initialPerson);

    const handleUpdate = (selectedName, changedName, changedJob) => {
        console.log('selectedName', selectedName);
        console.log('changedJob', changedJob);

        setPerson((person) => ({
            ...person,
            mentors: person.mentors.map((mentor) => {
                if(mentor.name === selectedName) {
                    if(changedName) {
                        return {
                            ...mentor,
                            name: changedName
                        }
                    } else if(changedJob) {
                        return {
                            ...mentor,
                            job: changedJob
                        }
                    }
                }
                return mentor;
            })
        }));
    };

    const handleAdd = (addMentorName, addMentorJob) => {
        setPerson((person) => ({
            ...person,
            mentors: [...person.mentors, {name: addMentorName, job: addMentorJob}]
        }))
    }

    const handleDelete = () => {

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
            <div className='btnGroup' style={{ width: '300px', display: 'flex', justifyContent: 'space-around'}}>
                <button 
                    className="nameChange"
                    type='button'
                    onClick={() => {
                        const selectedName = prompt(`멘토 누구 이름 변경?`);
                        const changedName = prompt(`뭘로 변경?`);

                        handleUpdate(selectedName, changedName);
                }}>
                    멘토이름 변경
                </button>
                <button 
                    className="jobChange"
                    type='button'
                    onClick={() => {
                        const selectedName = prompt(`누구의 Job을 바꿈?`);
                        const changedJob = prompt(`직업을 뭘로 바꿈?`);

                        console.log('selectedName', selectedName);
                        console.log('changedJob', changedJob);

                        handleUpdate( selectedName, '', changedJob); 
                    }}
                >
                    멘토직업 변경
                </button>
                <button
                    className='addMentor'
                    type='button'
                    onClick={() => {
                        const addMentorName = prompt(`추가할 멘토 이름`);
                        const addMentorJob = prompt(`추가할 멘토 직업`);

                        handleAdd(addMentorName, addMentorJob);
                    }}
                >
                멘토 추가
                </button>
            </div>
        </div>
    );
};