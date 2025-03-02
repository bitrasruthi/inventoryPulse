import { SignInDto } from "../../api/axios-client";

export type ISignInDtoStrict = Omit<SignInDto, "[key: string]">;
