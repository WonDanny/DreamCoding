import './style/AppMentor.css'
import { useState } from 'react';

export const AppMentor = () => {
    const [person, setPerson] = useState({
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
    });
    
    return (
        <div className='container'>
            <div className="person">
                <h1>{person.name}는 {person.job}</h1>
                <p>{person.name} 의 멘토는</p>
                <ul>
                    {person && person.mentors.map((mentor, index) => {
                        return (
                            <li key={index}>
                                {`${mentor.name} (${mentor.job})`}
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className='btnGroup'>
                <button 
                    className="nameChange"
                    type='button'
                    onClick={() => {
                        const selectedName = prompt(`누구의 이름을 바꾸시겠습니까?`);
                        const changedName = prompt(`이름을 무엇으로 바꾸시겠습니까?`)

                        setPerson((prev) => {
                            return {...prev, mentors: prev.mentors.map((mentor) => {
                                if(mentor.name === selectedName) {
                                   return {...mentor, name: changedName}
                                }
                                return mentor;
                            })}
                        })
                    }}
                >
                    멘토이름 변경
                </button>
                {/* <button 
                    className="jobChange"
                    type='button'
                    onClick={() => {
                        const job = prompt(`what's your mentor's job?`);

                        setPerson((prev) => {
                            return {...prev, mentor: {...prev.mentor, job: job}}
                        });
                    }}
                >
                    멘토직업 변경
                </button> */}
            </div>
        </div>
    );
};