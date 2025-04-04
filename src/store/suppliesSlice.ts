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

export const fetchSupplyById = createAsyncThunk(
  'supply/fetchById',
  async (supplyId) => {
    const response = await fetch(`${endpoint}/${supplyId}`);
    const data = await response.json();
    return data;
  }
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

// FIXME: types!!
interface SuppliesState {
  value: [];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  filter: {
    searchVal?: string,
    key: { key: string, label: string }
  };
}

const suppliesInitialState: SuppliesState = {
  value: [],
  status: 'idle',
  filter: {
    key: { key: 'number', label: 'По номеру' }
  },
}

interface SupplyFormState {
  date: string;
  city: string;
  quantity: number | null;
  type: string;
  warehouse: { name: string, address: string };
  status: string;
}

const supplyFormInitialState: SupplyFormState = {
  date: '',
  city: '',
  quantity: null,
  type: '',
  warehouse: { name: '', address: '' },
  status: '',
}

export const suppliesSlice = createSlice({
  name: 'supplies',
  initialState: suppliesInitialState,
  reducers: {
    updateFilter: (state, action) => {
      state.filter = action.payload;

      // const { key, searchVal } = action.payload;
      // state.filter.key = key.key;
      // state.filter.searchVal = searchVal.searchVal;
      console.log(state.filter)

      // if (key === 'searchVal') {
      //   state.filter.searchVal = searchVal;
      // } else if (key === 'filterKey') {
      //   state.filter.key = { key: searchVal, label: state.filter.key.label };
      // }
      // console.log(state.filter)
    },

    updateSearchVal: (state, action) => {
      state.filter.searchVal = action.payload;
    },
    updateFilterKey: (state, action) => {
      state.filter.key = action.payload;
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

export const supplyFormSlice = createSlice({
  name: 'supply',
  initialState: supplyFormInitialState,
  reducers: {
    updateSupplyForm: (state, action) => {
      const { field, value } = action.payload;
      if (field === 'warehouse') {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        state[field] = { name: value.name, address: value.address }
      }
      else {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        state[field] = value;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSupplyById.fulfilled, (state, action) => {
      const { id, city, quantity, type, warehouse, status } = action.payload;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      state.id = id;
      state.city = city || '';
      state.quantity = quantity || null;
      state.type = type || '';
      state.warehouse = warehouse || { name: '', address: '' };
      state.status = status || '';
    });
  },
})

export const { updateFilter } = suppliesSlice.actions;
export const { updateSupplyForm } = supplyFormSlice.actions;

export const suppliesReducer = suppliesSlice.reducer;
export const supplyFormReducer = supplyFormSlice.reducer;