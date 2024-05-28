import { Meta, StoryObj } from "@storybook/react"

import { CheckBox } from "./index"
import { ArgumentType } from "../../types/ArgumentType.ts";

const argTypes: ArgumentType = {
    label: {
        control: "text",
        description: "The text to use for the label element.",
    },
    name: {
        control: "text",
        description: "Value for `name` input attribute.",
    },
    disabled: {
        control: "boolean",
        description: "If `true`, component will be disabled."
    },
    checked: {
        control: "boolean",
        description: " If `true`, component will be checked."
    },
    tooltipLabel: {
        control: "text",
        description: "The text string to use for the tooltip.",
    },
    tooltipDelay: {
        control: "number",
        description: "Amount of time in milliseconds spent before the tooltip is visible.",
    },
    tooltipHideOnClick: {
        control: "boolean",
        description: "If `true`, the Tooltip hides after a click on element.",
    },
    tooltipPosition: {
        control: "radio",
        options: [ "vertical", "horizontal", "bottom", "top", "left", "right" ],
        table: {
            defaultValue: { summary: "vertical" },
        },
        description: "Determines the position of the tooltip.",
    },
    tooltipShowOnClick: {
        control: "boolean",
        description: "If `true`, the tooltip toggled when clicked. This is useful for mobile where there is no mouse enter.",
    },
    tooltipOffset: {
        control: "number",
        description: " If `tooltipPosition` - `vertical`, `bottom` or `top`, the tooltip moves relative to its axis.",
    },
    className: {
        table: { disable: true }
    },
    theme: {
        table: { disable: true }
    },
    children: {
        table: { disable: true }
    },
    style: {
        table: { disable: true }
    },
    onClick: {
        table: { disable: true }
    },
    onChange: {
        table: { disable: true }
    },
    onMouseEnter: {
        table: { disable: true }
    },
    onMouseLeave: {
        table: { disable: true }
    },
}

const meta: Meta<typeof CheckBox> = {
    title: "UI Kit lite/CheckBox",
    component: CheckBox,
    argTypes
}
export default meta

type Story = StoryObj<typeof CheckBox>

export const Basic: Story = {
    args: { 
        name: "Basic"
    },
}

export const Checked: Story = {
    args: { 
        checked: true,
    },
}

export const Disabled: Story = {
    args: {
        disabled: true,
    },
}

export const Label: Story = {
    args: {
        label: "Label",
        checked: true,
    },
}

export const WithTooltip: Story = {
    args: {
        label: "Label",
        tooltipLabel: "Tooltip text",
        tooltipDelay: 50,
        tooltipPosition: "bottom",
        tooltipHideOnClick: true,
        tooltipShowOnClick: false,
        tooltipOffset: 0,
    },
}