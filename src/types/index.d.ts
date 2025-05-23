export declare interface IOptions {
    /** Number of context lines */
    context?: number
    /** Custom equality test callback */
    comparator?: (a: any, b: any) => boolean
    timeout?: number
    returnPartialResults?: boolean
    maxEditLength?: number
    oneChangePerToken?: boolean
    ignoreWhitespace?: boolean
    /* async callback called when done */
    callback?: (value: any) => {}
    /* this is set by jsdiff itself */
    gotPartialResults?: boolean
}

export declare async function structuredPatch(
    oldFileName: string,
    newFileName: string,
    oldStr: string,
    newStr: string,
    oldHeader: string,
    newHeader: string,
    options: IOptions | (() => IOptions))


export declare async function createPatch(
    fileName: string,
    oldStr: string,
    newStr: string,
    oldHeader: string,
    newHeader: string,
    options: IOptions | (() => IOptions))
