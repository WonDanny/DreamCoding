

export const personReducer = (person, action) => {
    // console.log('person', person); 
    // console.log('action', action);

    switch(action.type) {
        case 'update' : {
            const {selectedName, changedName} = action;
            return {
                ...person,
                mentors: person.mentors.map((mentor) => {
                    if(mentor.name === selectedName) {
                        return { ...mentor, name: changedName};
                    }
                    return mentor;
                }),
            };
        }
        case 'added': {
            const {newMentorName, newMentorJob} = action;
            return {
                ...person,
                mentors: [...person.mentors, {name: newMentorName, job: newMentorJob}],
            };
        }
        case 'delete': {
            const {deleteMentorName} = action;
            return {
                ...person,
                mentors: person.mentors.filter((mentor) => {
                    return mentor.name !== deleteMentorName
                })
            }
        }
        default : {
            throw Error(`type: ${action.type} 은(는) 알수없는 action 타입입니다.`)
        }
    }
}