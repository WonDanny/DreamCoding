import { useState } from 'react';

import './style/App.css';
import './style/Profile.css';
import './style/Count.css';
import './style/Friends.css';

import { Profile } from './Components/Profile';
import { Count } from './Components/Count';
import { Friends } from './Components/Friends';

function App() {
	const imgUrl1 = "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
	const imgUrl2 = "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
	const imgUrl3 = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"

	const [totalCount, setTotalCount] = useState(0);

	const handleClick = () => {
		return setTotalCount((prev) => prev+1);
	};

  	return (
		<div className="App">
			<div className="left">
				<Profile 
					name="James Kim"
					job="프론트앤드 개발자"
					imgUrl={imgUrl1}
					newPerson={true}
				/>
				<Profile 
					name="수염"
					job="헤어 디자이너"
					imgUrl={imgUrl2}
				/>
				<Profile 
					name="Anna"
					job="학생"
					imgUrl={imgUrl3}
				/>
			</div>
			<div className='middle'>
				<Friends />
			</div>
			<div className="right">
				<div className='totalCount'>
					{`totalCount: ${totalCount} ${totalCount > 10 ? '!!!!' : ''}`}
				</div>
				<Count totalCount={totalCount} onClick={handleClick}/>
				<Count totalCount={totalCount} onClick={handleClick}/>

			</div>
		</div>
  	);
};

export default App;
