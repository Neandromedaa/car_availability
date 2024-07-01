import './App.scss';
import CarCard from './components/CarCard';
import cars from './components/cars';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const data = window.localStorage.getItem('MY_APP_STATE');
  const [pick, setPick] = useState(true);
  const [date, setDate] = useState(dayjs().format('DD.MM.YYYY'));
  const [check, setCheck] = useState(data ? JSON.parse(data) : [false, false, false, false, false, false, false, false, false, false]);

  useEffect(() => {
    window.localStorage.setItem('MY_APP_STATE', JSON.stringify(check));
  }, [check]);

  function arrCheck(index){
    let copy = Object.assign([], check);
    copy[index] = !check[index];
    setCheck(copy);
  }

  const showCars = cars.map((car, index) => {
    return <CarCard key={uuidv4()} name={car.name} img={car.img} check={check[index]} index={index} changeState={arrCheck}/>
  });
  
  return (
    <>
      <div className='app' id='capture'>
        <div className='headWrap'>
          <div className='header'>Свободные кабриолеты</div>
          <div className='logo'/>
          {/* <div className='datePicker'>
            {pick
                ?
                <div className='currDay' onClick={() => setPick(!pick)}>{date}</div>
                :
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    
                    slotProps={{
                      openPickerIcon: { fontSize: 'large' },
                      openPickerButton: { color: 'secondary' },
                      textField: {
                        variant: 'filled',
                        focused: true,
                        color: 'primary',
                      },
                    }}
                    onChange={newDate => {
                        setPick(!pick);
                        setDate(dayjs(newDate).format('DD.MM.YYYY'));
                      }
                    } 
                  />
                </LocalizationProvider>
            }
          </div> */}
        </div>     
        <div className='cardContainer'>
          {showCars}
          <div className='logoMobile'/>
        </div>
        
      </div>
    </>
  );
}

export default App;
