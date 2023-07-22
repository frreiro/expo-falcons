import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import Falcons, { YearsData } from '@resource/data';

const initialState: YearsData = Falcons.years[0];

export const yearDataSlice = createSlice({
  name: 'car_year',
  initialState,
  reducers: {
    changeYear: (state, action: PayloadAction<YearsData['id']>) => {
      const falconsDataFromId = Falcons.years.find(
        year => year.id === action.payload,
      );

      if (falconsDataFromId) {
        state.id = falconsDataFromId?.id;
        state.augment_reality = falconsDataFromId?.augment_reality;
        state.documents = falconsDataFromId?.documents;
        state.image = falconsDataFromId?.image;
        state.title = falconsDataFromId?.title;
        state.year = falconsDataFromId?.year;
      }
    },
  },
});

export const { changeYear } = yearDataSlice.actions;
export default yearDataSlice.reducer;
