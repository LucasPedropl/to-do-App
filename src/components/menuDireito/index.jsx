import { User, Container, DarkMode, SwitchLabel, SwitchInput, SwitchSlider, ProgressBarContainer, ProgressBarFill } from './StyledComponents.JS';
import userImg from '../../../public/user.png';
import { useState } from 'react';
import { ProgressBarArea } from './StyledComponents.JS';
import { ProgressBarLabel } from './StyledComponents.JS';
import { DeleteArea } from './StyledComponents.JS';
import { DeleteButton } from './StyledComponents.JS';

const MenuDireito = () => {
	const [dark, setDark] = useState(false);
	const percent = 50;
	return (
		<Container>
			<User>
				<h3>Hi, User!</h3>
				<img src={userImg} />
			</User>
			<DarkMode>
				<span>{dark ? 'Darkmode' : 'Lightmode'}</span>
				<SwitchLabel>
					<SwitchInput type="checkbox" checked={dark} onChange={() => setDark((v) => !v)} />
					<SwitchSlider />
				</SwitchLabel>
			</DarkMode>

			<ProgressBarArea>
				<ProgressBarLabel>
					<p>All tasks</p>
					<p>3/6</p>
				</ProgressBarLabel>
				<ProgressBarContainer>
					<ProgressBarFill $percent={percent} />
				</ProgressBarContainer>
				<ProgressBarLabel>
					<p>Today tasks</p>
					<p>3/6</p>
				</ProgressBarLabel>
				<ProgressBarContainer>
					<ProgressBarFill $percent={percent} />
				</ProgressBarContainer>
				<ProgressBarLabel>
					<p>Important tasks</p>
					<p>3/6</p>
				</ProgressBarLabel>
				<ProgressBarContainer>
					<ProgressBarFill $percent={percent} />
				</ProgressBarContainer>
			</ProgressBarArea>
			<DeleteArea>
				<DeleteButton>Delete all tasks</DeleteButton>
			</DeleteArea>
		</Container>
	);
};

export default MenuDireito;
