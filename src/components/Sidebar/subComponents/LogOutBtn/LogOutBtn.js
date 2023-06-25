//import { useDispatch } from 'react-redux';
import { Svg, Button } from 'styles/components';
import { Wrap } from './LogOutBtnStyled';
import sprite from 'images/svg/sprite.svg';

const LogoutBtn = () => {
  
//const dispatch = useDispatch();

  const handleLogout = () => {
      //очистити перед виходом 
    //  dispatch(auth...);
      //функція виходу
    //logOut();
  };

  return (
    <Wrap>
      <Button type="button" onClick={handleLogout}>
        Log out
              <Svg>
          <use href={`${sprite}#log-out`} />
        </Svg>
      </Button>
    </Wrap>
  );
};

export default LogoutBtn;