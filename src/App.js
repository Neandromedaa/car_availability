import './App.scss';
import CarCard from './components/CarCard';
import cars from './components/cars';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import html2canvas from 'html2canvas';

function App() {
  const [pick, setPick] = useState(true);
  const [date, setDate] = useState(dayjs().format('DD.MM.YYYY'));
  
  const showCars = cars.map(car => {
    return <CarCard name={car.name} img={car.img}/>
  });

  return (
    <>
      <div className='app' id='capture'>
        <div className='headWrap'>
          <div className='header'>Свободные автомобили</div>
          <div className='logo'/>
          <div className='datePicker'>
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
          </div>
        </div>     
        <div className='cardContainer'>
          {showCars}
        </div>
        
      </div>
    </>
  );
}

export default App;
