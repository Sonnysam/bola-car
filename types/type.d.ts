import { TextInputProps, TouchableOpacityProps } from "react-native";
import { GooglePlacesAutocompleteProps } from "react-native-google-places-autocomplete";

declare interface GoogleInputProps extends GooglePlacesAutocompleteProps {
  icon?: string;
  initialLocation?: string;
  containerStyle?: string;
  textInputBackgroundColor?: string;
  placeholder?: string;
  query?: any;
  handlePress: ({
    latitude,
    longitude,
    address,
  }: {
    latitude: number;
    longitude: number;
    address: string;
  }) => void;
}

declare interface InputFieldProps extends TextInputProps {
  label: string;
  icon?: any;
  secureTextEntry?: boolean;
  labelStyle?: string;
  containerStyle?: string;
  inputStyle?: string;
  iconStyle?: string;
  className?: string;
}

interface AuthState {
  userToken: boolean;
  name: string;
  email: string | null;
  phoneNo: string | null;
  password: string | null;
  confirmPassword: string | null;
  userType: string;
  location: string | null;
  uid: string | null;
  profilePhoto: string | null;
  amount: number | null;
  date: string;
  region: string | null;
  userInfo: Record<string, unknown> | null;
  serviceType: string | null;
  wasteType: string | null;
  amt: number | null;
  title: string | null;
  toggle: boolean;
  numberPlate: string | null;
  truckType: string | null;
  houseNo: string | null;
}

type AuthActions = {
  setUserToken: (userToken: boolean) => void;
  setName: (name: string) => void;
  setEmail: (email: string | null) => void;
  setPhoneNo: (phoneNo: string | null) => void;
  setPassword: (password: string | null) => void;
  setConfirmPassword: (confirmPassword: string | null) => void;
  setUserType: (userType: string) => void;
  setLocation: (location: string | null) => void;
  setUid: (uid: string | null) => void;
  setProfilePhoto: (profilePhoto: string | null) => void;
  setAmount: (amount: number | null) => void;
  setDate: (date: string) => void;
  setRegion: (region: string | null) => void;
  setUserInfo: (userInfo: Record<string, unknown> | null) => void;
  setServiceType: (serviceType: string | null) => void;
  setWasteType: (wasteType: string | null) => void;
  setAmt: (amt: number | null) => void;
  setTitle: (title: string | null) => void;
  toggleProfile: () => void;
  setNumberPlate: (numberPlate: string | null) => void;
  setTruckType: (truckType: string | null) => void;
  setHouseNo: (houseNo: string | null) => void;
};

export type AuthStore = AuthState & AuthActions;

interface Location {
  description: string | null;
  location: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  } | null;
}

interface MapState {
  origin: Location;
  destination: Location;
  location: Location;
  travelTimeInformation: any | null;
}

type MapActions = {
  createMap: () => void;
  updateMap: (payload: {
    origin: Location;
    destination: Location;
    description: string;
  }) => void;
  updateTravelTimeInformation: (travelTimeInformation: any) => void;
  deleteMap: () => void;
};

export type MapStore = MapState & MapActions;

interface Order {
  uid: string;
  completed: boolean;
  accept_ride: boolean;
  courierInfo: { Uid: string };
}

interface OrderState {
  userInfo: Record<string, unknown>;
  getOrderRequest: any | null;
  amount: number | null;
  truckType: string | null;
  location: string | null;
  amt: number | null;
  title: string | null;
  activeOrders: Order[];
  historyOrders: Order[];
  availableOrders: Order[];
  activeOrder: Order | null;
}

type OrderActions = {
  getOrders: (payload: Order[]) => void;
  createOrder: () => void;
  getOrderRequest: (payload: any) => void;
  updateAvailableOrder: (payload: { index: number; item: Order }) => void;
  removeItem: (payload: { uid: string }) => void;
  removeActiveOrder: () => void;
  setActiveOrder: (payload: Order) => void;
  deleteOrder: () => void;
};

export type OrderStore = OrderState & OrderActions;
