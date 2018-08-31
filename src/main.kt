import kotlinx.html.*
import kotlinx.html.dom.*
import kotlinx.html.js.onBlurFunction
import kotlinx.html.js.onChangeFunction
import kotlinx.html.js.onClickFunction
import org.w3c.dom.HTMLElement
import org.w3c.dom.get
import kotlin.browser.document

fun main(args: Array<String>) {
    reDraw()
}

private fun reDraw() {
    val root = document.getElementById("root")
    val child = root?.childNodes?.get(0)
    if (child != null) {
        root.removeChild(child)
    }

    root?.append {
        body()
    }
}

private fun TagConsumer<HTMLElement>.body() {
    if (showWow) {
        span {
            +freeText
            onClickFunction = {
                showWow = false
                reDraw()
            }
        }
    } else {
        val input = input(InputType.text) {
            value = freeText
            console.log("wow")

            onBlurFunction = {
                var v = it.currentTarget.asDynamic().value as String
                if (v.isEmpty()) {
                    v = "xxxxxxxxxxxxxxxxxxxxxxx"
                    this.style = "color: white;"
                }

                freeText = v
                console.log(freeText)
                showWow = true
                reDraw()
            }
        }
        input.asDynamic().focus()
        input.asDynamic().select()
    }
}

var freeText: String = "xxxxxxxxxxxxxx"
var showWow: Boolean = true
