import { LogStatus } from "$lib/enums/LogStatusEnum"
import { LogType } from "$lib/enums/LogTypeEnum"
import { TimeHelper } from "$lib/helpers/TimeHelper"
import type { Project } from "$lib/models/applicationWeb"

class Logger {
}

export class ApplicationLogger extends Logger{
    private constructor() {
        super()
    }

    static INFO(message: string): void {
        const formattedInfoLogMessage = `${LogType.APP} - ${TimeHelper.LogDateFormatter()} - ${LogStatus.INFO}: ${message}`
        console.log(formattedInfoLogMessage)
    }

    static ERROR(message: string): void {
        const formattedErrorLogMessage = `${LogType.APP} - ${TimeHelper.LogDateFormatter()} - ${LogStatus.ERROR}: ${message}`
        console.error(formattedErrorLogMessage)
    }
}

export class DatabaseLogger extends Logger{
    private constructor() {
        super()
    }

    static INFO(message: string, data: Project | Project[]): void {
        const formattedInfoLogMessage = `${LogType.DATABASE} - ${TimeHelper.LogDateFormatter()} - ${LogStatus.INFO}: ${message}`
        console.log(formattedInfoLogMessage)
        console.table(data)
    }
}