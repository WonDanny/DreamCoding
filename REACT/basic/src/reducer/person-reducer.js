

export const personReducer = (person, action) => {
    console.log('person', person);
    console.log('action', action);
    console.log('action.type', action.type);

    switch (action.type) {
        case 'update': {
            const { selectedName, changedName } = action;

            return {
                ...person,
                mentors: person.mentors.map((mentor) => {
                    if(mentor.name === selectedName) {
                        return {...mentor, name: changedName};
                    }
                    return mentor;
                })
            };
        }
        case 'add': {
            const { newMentorName, newMentorJob } = action;
            
            return {
                ...person,
                mentors: [...person.mentors, {name: newMentorName, job: newMentorJob}]
            };
        }
        case 'delete': {
            const { deleteMentorName } = action;

            return {
                ...person,
                mentors: person.mentors.filter((mentor) => deleteMentorName !== mentor.name)
            };
        }
        default: {
            throw Error(`알수없는 액션 타입${action.type}`);
        }
    }
};