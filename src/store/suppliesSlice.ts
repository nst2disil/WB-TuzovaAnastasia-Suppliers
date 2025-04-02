import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const endpoint = 'http://localhost:3000/supplies';

export const fetchSupplies = createAsyncThunk(
  'supplies/fetchSupplies',
  async () => {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  },
);

export const cancelSupply = createAsyncThunk(
  'supplies/cancelSupply',
  async (supplyId) => {
    const response = await fetch(`${endpoint}/${supplyId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data = await response.json();
    return data;
  },
);

export const updateSupply = createAsyncThunk(
  'supplies/updateSupply',
  async (supplyData) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const response = await fetch(`${endpoint}/${supplyData.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      body: JSON.stringify({ ...supplyData }),
    });
    const data = await response.json();
    return data;
  },
);

export const createSupply = createAsyncThunk(
  'supplies/createSupply',
  async (supplyData) => {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      body: JSON.stringify({ ...supplyData }),
    });
    const data = await response.json();
    return data;
  },
);

interface suppliesState {
  value: [];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: suppliesState = {
  value: [],
  status: 'idle',
}

export const suppliesSlice = createSlice({
  name: 'supplies',
  initialState,
  reducers: {
    add: () => {
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSupplies.fulfilled, (state, action) => {
        state.value = action.payload;
      })
      .addCase(cancelSupply.fulfilled, (state, action) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        state.value = state.value.filter(supply => supply.id !== action.payload.id);
      })
      .addCase(updateSupply.fulfilled, (state, action) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const index = state.value.findIndex((val) => val.id === action.payload.id);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        state.value[index] = { ...state.value[index], ...action.payload };
      })
      .addCase(createSupply.fulfilled, (state, action) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        state.value.push(action.payload);
      })
  }
})

export const { add } = suppliesSlice.actions;
export default suppliesSlice.reducer;