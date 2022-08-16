//SDk
interface ThirdPartyApi {
    refreshToken(token: string): string;
}

//interfaceの振る舞いの実装
class ApiForV1 implements ThirdPartyApi {
    sdk = new SdkForV1();

    refreshToken(token: string): string {
        return this.sdk.getTokenInfo(token)
    }
}

class SdkForV1 {
    getTokenInfo(token: string): string {
        return `ABCD-${token}-EFGH`
    }
}

class SdkForV2 {
    getTokenInfo(token: string): string {
        return `IIIII-${token}--PPPPPP`
    }
}

/* Adapter(委譲) */
class ThirdPartyApiImpl implements ThirdPartyApi {
    private api = new ApiForV1();

    refreshToken(token: string): string {
        return this.api.refreshToken(token)
    }
}

/*Adapter(継承)*/
class ThirdPPartyApiImpl extends ApiForV1 implements ThirdPartyApi {
    refreshToken(token: string): string {
        return super.refreshToken(token)
    }
}
