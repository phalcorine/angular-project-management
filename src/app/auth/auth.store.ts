import { BehaviorSubject } from "rxjs";
import { AuthUser } from "./model/auth-user.model";

const currentUser = new BehaviorSubject<AuthUser>({ fullName: null, token: null });
export const currentUser$ = currentUser.asObservable();