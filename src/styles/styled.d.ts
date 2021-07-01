import "styled-components"
import { Themer } from "./index"

declare module "styled-components" {
    type TypeThemer = typeof Themer

    export interface DefaultTheme extends TypeThemer {}
}
