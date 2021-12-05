import { useSelector as useReduxSelector,TypedUseSelectorHook } from 'react-redux';
import { RootState } from "store/index"

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector