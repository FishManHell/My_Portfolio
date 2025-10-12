import {callApi} from "shared/api/callApi";

export const mockedCallApi = callApi as jest.MockedFunction<typeof callApi>;
