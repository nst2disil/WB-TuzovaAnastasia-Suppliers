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
  async (supplyId) => {
    const response = await fetch(`http://localhost:3000/supplies/${supplyId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: false }),
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
    },
    // delete: () => {
    // },
    // update: () => {
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSupplies.fulfilled, (state, action) => {
        state.value = action.payload;
      })
      .addCase(cancelSupply.fulfilled, (state, action) => {
        state.value = action.payload;
      })
  }
})

export const { add } = suppliesSlice.actions;
export default suppliesSlice.reducer;