# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [v1.0.0-beta.32]

- `calcite-stepper` - `calciteStepperItemHasChanged` event has been renamed to `calciteStepperItemChange`
- `calcite-stepper-item` - `calciteStepperItemSelected` event has been renamed to `calciteStepperItemSelect`
- `calcite-stepper-item` - `registerCalciteStepperItem` event has been renamed to `calciteStepperItemRegister`

### Breaking Changes

- `calcite-modal` - `close-label` prop is now renamed to `intl-close` for consistency (#466)
- `calcite-modal` - `open` and `close` methods removed in favor of `active` prop (#466)
- `calcite-modal` - `size => width`, which can be passed standard (s/m/l) or custom width in px (#239)
- `calcite-modal` - `fullscreen` made it's own prop (#466)
- `calcite-modal` - new `scale` prop for setting UI scale of modal (#466);
- `calcite-date` - `prevMonthLabel` and `nextMonthLabel` updated to `intlPrevMonth` and `intlNextMonth` (#97)
- `calcite-switch` - `switched` boolean has been added to `calciteSwitchChange` event detail

## [v1.0.0-beta.31]

### Breaking Changes

- `calcite-label` - `calciteLabelSelectedEvent` event has been renamed to `calciteLabelFocus`
- `calcite-button` - `icon-position` and `icon` props have been removed - you can now use `icon-start` and `icon-end` props to position up to two icons.
- `calcite-link` - `icon-position` and `icon` props have been removed - you can now use `icon-start` and `icon-end` props to position up to two icons.
- `calcite-split-button` - `primary-icon` prop has been removed - you can now use `primary-icon-start` and `primary-icon-end` props to position up to two icons.
- `calcite-tab` - `isActive` prop is now `active` to be consistent with other components
- `calcite-tab-title` - `isActive` prop is now `active` to be consistent with other components
- `calcite-loader` - `isActive` prop is now `active` to be consistent with other components
- `calcite-popover` `textClose` has been changed to `intlClose`.
- `calcite-card` - event name change `calciteCardSelected => calciteCardSelect` (#459)

### Added

- Generate new types for using components inside a Preact + TypeScript
- `calcite-loader` - add `scale` for both standard and inline loaders (#465)
- `calcite-dropdown` now has a `disable-close-on-select` attribute that allows dropdowns to remain open on selection when `calcite-dropdown-group` `selection-mode` is set to `single` or `multi`
- `calcite-dropdown` now emits `calciteDropdownClose` when it closes.
- `calcite-dropdown` now emits `calciteDropdownOpen` when it opens.
- `calcite-dropdown` now has a `disabled` prop.
- `calcite-input` - adds `clearable` prop to display a clear button when field has a value - this also enables clearing of value while focused and using `Escape` key.
- `calcite-input` - adds `disabled` prop
- `calcite-button` - `icon-start` and `icon-end` props have been added for explicit positioning of up to two icons.
- `calcite-link` - `icon-start` and `icon-end` props have been added for explicit positioning of up to two icons.
- `calcite-split-button` - `primary-icon-start` and `primary-icon-end` props have been added for explicit positioning of up to two icons.
- `calcite-split-button` - `dropdown-icon-type` prop now accepts an `overflow` value for an additional icon option.
- `calcite-notice` now has a `intl-close` attribute that allows the title of the close button to be set. It defaults to the English "Close".
- `calcite-modal` - added `disable-close-button` prop for hiding X (#669)
- `calcite-popover` - added `disable-close-button` prop for hiding X (#669)

### Fixed

- `calcite-dropdown` - will now correctly focus the slotted `dropdown-trigger` element when the dropdown is closed
- `calcite-input` - fixes inconsistencies in height of inputs with various configurations
- `calcite-label` - fixes inconsistencies in `layout=inline` padding applications
- `calcite-slider` - fixes positioning of handles and labels, better focus styles (#660)
- `calcite-split-button` - fixed split button triggering of dropdown
- `calcite-tab-title` - improve focus state

### Updated

- `calcite-dropdown` - a dropdown will now close if another dropdown is opened
- `calcite-dropdown` - mouse clicks on `calcite-dropdown-group` titles will no longer close the dropdown
- `calcite-slider` - improved `disabled` styles (#676)

## [v1.0.0-beta.30] - June 12th 2020

### Fixed

- fix NPM release issue

## [v1.0.0-beta.29] - June 12th 2020

### Fixed

- fix NPM release issue

## [v1.0.0-beta.28] - June 11th 2020

### Breaking Changes

- `calcite-accordion` - `calciteAccordionItemHasChanged` event has been renamed to `calciteAccordionChange`
- `calcite-accordion-item` - `calciteAccordionItemSelected` event has been renamed to `calciteAccordionItemSelect`
- `calcite-accordion-item` - `closeCalciteAccordionItem` event has been renamed to `calciteAccordionItemClose`
- `calcite-accordion-item` - `registerCalciteAccordionItem` event has been renamed to `calciteAccordionItemRegister`
- `calcite-dropdown-group` - `registerCalciteItemHasChanged` event has been renamed to `calciteDropdownItemChange`
- `calcite-dropdown-group` - `registerCalciteDropdownGroup` event has been renamed to `calciteDropdownGroupRegister`
- `calcite-dropdown-item` - `registerCalciteDropdownItem` event has been renamed to `calciteDropdownItemRegister`
- `calcite-dropdown-item` - `calciteDropdownItemSelected` event has been renamed to `calciteDropdownItemSelect` and is now internal.
- `calcite-dropdown-item` - `closeCalciteDropdown` event has been renamed to `calciteDropdownClose`

### Added

- `calcite-dropdown` now has a read-only `selectedItems` prop that contains all selected items.
- `calcite-dropdown` now emits `calciteDropdownSelect` when an item selection changes.

### Fixed

- `calcite-accordion` - Fix for incorrect keyboard navigation behavior when a `calcite-accordion` was nested inside another `calcite-accordion`
- `calcite-accordion` - Fix for incorrect display of `icon-position` when a `calcite-accordion` was nested inside another `calcite-accordion`

### Updated

- `calcite-popover` - `max-width` has been removed. Content may need width set.

## [v1.0.0-beta.27] - May 26th 2020

### Breaking Changes

- `calcite-input` - `calciteInputChange` event has been renamed to `calciteInputInput`

### Added

- `calcite-radio-group` now has a `width` prop that accepts `auto` (default) or `full` values.

### Fixed

- `calcite-input` - will now properly position a requested `icon` if `prefix-text` is also set
- `calcite-switch` - will now properly display in RTL
- `calcite-alert` - will now properly animate the direction of the auto-dismiss progress bar in RTL
- `calcite-tree` - will now properly wrap long, unbroken strings in `calcite-tree-item` children

### Updated

- `calcite-accordion` - styling of `icon-position=end` icons has been updated for `chevron` and `caret` values - it will now display upward when a `calcite-accordion-item` is collapsed, and downward when expanded
- `calcite-input` - when `status="valid"`, icon (if present) will appear green

## [v1.0.0-beta.26] - May 18th 2020

### Breaking Changes

- `calcite-checkbox` - `size` prop is now `scale` to be consistent with other components
- `calcite-chip` - will not show the dismiss ("x") button unless new `dismissible` prop is `true`
- `calcite-button` - will no longer accept `xs` or `xl` values for `scale` prop
- `calcite-chip` - will no longer accept `xs` or `xl` values for `scale`
- `calcite-combobox` - will no longer accept `xs` or `xl` values for `scale`

### Added

- `calcite-radio-group-item` can now display an icon by passing a Calcite UI Icon name to the `icon` attribute. The icon can be positioned with the `icon-position` attribute.
- `calcite-split-button` now accepts `ellipsis` as a value for the `dropdown-icon-type` attribute
- `calcite-graph` component for simple area graphs from series data sets
- `calcite-chip` - now has a `color` prop that will accept `grey` (default), `blue`, `red`, `yellow`, and `green` as values
- `calcite-chip` - now has an `appearance` prop that will accept `solid` (default) and `clear` as values

### Fixed

- `calcite-dropdown` - will now properly open and close when children of the `dropdown-trigger` slot are acted on.
- `calcite-button` - now trims whitespace to accurately display "icon only" buttons as squares.
- `:root` styles now include some text rendering improvements
- `calcite-input` - fixed missing icons in firefox
- `calcite-date` - fixed small margin/gap above input

### Updated

- `calcite-button` - styling of `appearance=transparent` buttons has been updated
- `calcite-button` - dimensions and font-size of buttons have been updated

## [v1.0.0-beta.25] - Apr 28th 2020

### Breaking Changes

- `calcite-button` no longer accepts `inline` as a value for `appearance` - you can instead use the new `calcite-link` component
- `calcite-pagination` - `backgroundStyle` property removed (always transparent)
- `calcite-pagination` - `num`, `start`, and `total` now refer to records not pages
- `calcite-pagination` - `calcitePaginationUpdate` event now only fires in response to user input
- `calcite-pagination` - `setPage` method removed
- `calcite-date` - `show-calendar` prop changed to `active`

### Added

- new component `calcite-link`
- new `calcite-label`, `calcite-input`, and `calcite-input-message` components
- `calcite-slider` can now be programmatically focused with the `setFocus()` method
- `calcite-date` now has `scale` prop for small, medium, and large
- `calcite-radio-group` now has an `appearance` prop that accepts `outline` or `solid` (default) values
- `calcite-radio-group` now has a `layout` prop that accepts `vertical` or `horizontal` (default) values
- `calcite-input` can now be programmatically focused with the `setFocus()` method
- `calcite-pagination` now has a `scale` prop that accepts `s`, `m` (default), or `l` values
- `calcite-accordion-item` can now display an icon by passing a Calcite UI Icon name to the `icon` attribute

### Fixed

- `calcite-pagination` - pages and next/previous can now be navigated with keyboard
- `calcite-icon` - fixed use of kebab case in filled icon variants (#494)

## [v1.0.0-beta.24] - Apr 8th 2020

### Fixed

- fix NPM release issue

## [v1.0.0-beta.23] - Apr 7th 2020

### Breaking Changes

- `calcite-icon` - `filled` prop removed (use `F` at end of icon name)

### Added

- Support for icons which use multiple paths + opacity

## [v1.0.0-beta.22] - Apr 3rd 2020

### Breaking Changes

- `calcite-date-picker` is now `calcite-date`
- `calcite-date` no longer accepts start of week as a prop

### Added

- new component `calcite-stepper`
- new component `calcite-split-button`
- improved focus styles across all components
- a `max-items` attribute has been added to `calcite-dropdown` (#396)

### Updated

- `calcite-date` - automatically finds start of week for given locale
- `calcite-date` - automatically formats date in input for given locale
- `calcite-date` - support for buddhist era
- `calcite-date` - support for arabic numerals
- `calcite-date` - `calciteDateChange` emits selected `Date` object in `event.detail`

### Fixed

- `calcite-date` - fixed in ie11 (#368)
- `calcite-date` - fixed date entering via input (#307)
- `calcite-date` - columns correct even when very narrow (#308)
- `calcite-icon` - always render in target size to prevent shifting layout (#432)
- `calcite-accordion` - fixed in ie11 (#366)
- `calcite-dropdown` - fixed in ie11 (#369)

## [v1.0.0-beta.21] - Mar 31st 2020

### Added

- new `calcite-combobox` component (#328)
- new `calcite-chip` component (#328)
- new `calcite-popover-manager` component (#411)
- new `calcite-tooltip-manager` component (#411)
- `calcite-radio-group` - added `setFocus()` method

### Breaking Changes

- `calcite-dropdown` - `alignment` attribute now uses `start` and `end` values instead of `left` and `right`
- `calcite-dropdown-item` - `link-title` attribute has been removed
- `calcite-icon` - drop `filled` prop as it's no longer valid with the latest calcite UI icons
- `calcite-tree` - `size` prop is now `scale` to be consistent with other components

### Updated

- `calcite-dropdown` - active state indicators for `selection-mode=none` have been removed
- `calcite-dropdown` - active state indicators for `selection-mode=multi` have been updated to use checkmarks
- `calcite-dropdown-item` - any attributes passed to a `calcite-dropdown-item` that has a `href` attribute will now be spread to the rendered child link
- `calcite-icon` - SVG no longer rendered when icon fails to load
- `calcite-loader` - now displays as circle, added fade out at the end of determinate loader

### Fixed

- `calcite-dropdown` - `alignment=center` now correctly positions the dropdown if the slotted `dropdown-trigger` is wider than the dropdown container
- `calcite-dropdown` - items are now focused when the dropdown is opened
- `calcite-dropdown` - items are now scrollable when the dropdown gets long
- `calcite-icon` - update rendering when `scale` changes
- `calcite-icon` - fixed in ie11
- `calcite-loader` - fixed in ie11
- `calcite-radio-group` - fixed in ie11
- `calcite-progress` - fixed in ie11
- `calcite-modal` - fixed in ie11
- `calcite-slider` - fixed in ie11
- `calcite-tabs` - tabs occupy full height
- `calcite-tree-item` - fixed in ie11
- `calcite-tree` - fixed in ie11

## [v1.0.0-beta.20] - Feb 25th 2020

### Added

- new component `calcite-card`

### Updated

- `calcite-tooltip`, `calcite-popover` - Allow pointer events for poppers that have escaped their container

## [v1.0.0-beta.19] - Feb 19th 2020

### Added

- `calcite-dropdown-item` can now display icons by passing a Calcite UI Icon name(s) to the `icon-start` and / or `icon-end` attribute
- `calcite-dropdown` now has a `width` attribute which accept a value of "s", "m", or "l", and defaults to "m"

### Breaking Changes

- `calcite-button` no longer accepts path data passed to the `icon` attribute - instead you can now pass a Calcite UI Icon name.
- `calcite-popover` and `calcite-tooltip` - Removed property `boundariesElement`. It is no longer necessary with the latest version of [Popper](https://popper.js.org).
- `calcite-popover` - Removed property `flowInner`. Is no longer supported with the latest version of [Popper](https://popper.js.org). A user can use negative offset values instead.
- `calcite-popover` - Renamed property `xOffset` to `offsetDistance` to better match [popper API](https://popper.js.org/docs/v2/modifiers/offset/). The property now has a default of '6'.
- `calcite-popover` - Renamed property `yOffset` to `offsetSkidding` to better match [popper API](https://popper.js.org/docs/v2/modifiers/offset/).

### Fixed

- `calcite-popover` - Fixed an issue with background color on the close button.
- Addressed RTL inconsistencies for `calcite-accordion`, `calcite-alert`, and `calcite-notice`

## [v1.0.0-beta.18] - Feb 3rd 2020

### Fixed

- `calcite-icon` - fixed issue where icon would not load its icon data. #314
- `calcite-tree` - long strings inside calcite-tree-item no longer overflow from calcite-tree.

## [v1.0.0-beta.17] - Jan 22nd 2020

### Breaking Changes

- `calcite-progress` no longer accepts slotted content

### Added

- new `calcite-pagination` component (#281)
- `calcite-accordion` now accepts `transparent` as an `appearance` attribute value
- `calcite-accordion` now accepts an `icon-type` attribute to specify icon type - "chevron" (default), "caret" or "plus-minus"
- `calcite-accordion-item` now accepts an `item-subtitle` attribute to display beneath `item-title`
- `setFocus()` added to `calcite-alert` - focuses a slotted link or a close button, if present
- `calcite-loader` now accepts a `no-padding` boolean attribute
- `calcitePopoverClose` and `calcitePopoverOpen` events added to `calcite-popover` component

### Updated

- `setFocus()` now focuses the first element in a `calcite-notice` - a slotted link or a close button, if present
- styling fixes for `calcite-button`, `calcite-dropdown`

## [v1.0.0-beta.16] - Dec 19th 2019

### Added

- new `calcite-icon` component
- new `CalciteModal.focusElement` method for restoring focus to an element in a modal
- `calcite-button` now accepts boolean attributes `round` and `floating`
- `calcite-button` can now be programmatically focused with the `setFocus()` method
- the close button of a `dismissible` `calcite-notice` can now be programmatically focused with the `setFocus()` method

### Fixed

- fixes for date picker in Edge (#257)

## [v1.0.0-beta.15] - Nov 26th 2019

### Fixed

- `calcite-date-picker` - Corrected date picker calendar opening up on null or no value property.
- `calcite-date-picker` - Change of input value updates the calendar to show same date.

## [v1.0.0-beta.14] - Nov 18th 2019

### Breaking Changes

- `calcite-button` - `iconposition` attribute updated to `icon-position`
- `calcite-dropdown-group` - `grouptitle` attribute updated to `group-title`
- `calcite-dropdown-item` - `linktitle` attribute updated to `link-title`
- `calcite-alert` - `dismiss` attribute updated to `auto-dismiss`
- `calcite-alert` - `duration` attribute updated to `auto-dismiss-duration`
- `calcite-alert` - `.openCalciteAlert()` method updated to `.open()`
- `calcite-alert` - `.closeCalciteAlert()` method updated to `.close()`
- `calcite-alert` no longer requires a wrapping `calcite-alerts` component
- `calcite-alerts` has been removed

### Added

- `calcite-notice` - new component has been added
- `calcite-alert` - `scale` is now available as a configurable attribute
- `calcite-dropdown` now has configurable `selection-mode` (#220)
- `no-padding` attribute for modals allowing modal content to fill space
- `calcite-dropdown` now has configurable `type` - click or hover (#220)

### Fixed

- Fix for `calcite-dropdown` taking up height when closed (#213)
- Fixed incorrect dark theme color, other styling updates

## [v1.0.0-beta.13] - Nov 11th 2019

### Added

- Added accordion component (#10)
- New `ScrollContent` method on modals, which allows manipulating scroll position of modal content
- Border radius on popover (#218)

### Fixed

- Fix clicks of radio group item in Edge (#139)
- Fix clicks of calcite-switch in Edge (#138)
- Fix `calcite-button` of type `submit` (#193)
- Fix `calcite-dropdown` focus style (#181)

### Updated

- Improved modal styling (#191)

## [v1.0.0-beta.12] - Nov 1st 2019

### Updated

- Medium modals are now a more readable line length (#205)
- Popover modifier enhancements (#207)
- Progress component style
- Button component style
- Dropdown component style
- Popover and tooltip shadow / caret style

### Fixed

- Fix back and secondary slots in modal (#209)
- Make docked modal's content section visible on mobile (#203)
- Fix display of modals in edge (#135)
- Fix escape key press when no element is focused but modal is open (#130)
- Fix for button form submission (#193)

## [v1.0.0-beta.11] - Oct 22nd 2019

### Fixed

- Fixes to popup styling
- Fixes duplicate id in button component
- Fixes for tree nav in Edge
- Fixes for toggle styling

### Added

- Added tooltip component
- Added configuration options for Popover

## [v1.0.0-beta.10] - Sep 19th 2019

### Fixed

- Fixed trees with strange nesting
- Edge fixes for alerts, dropdowns, buttons
- Fixed button container styling
- Fixed button appearance inline / no href tab issue

### Added

- Added popover component

## [v1.0.0-beta.9] - Sep 9th 2019

### Fixed

- Fixed scroll behavior in tall modals (only scroll modal content)
- Bug with nesing tree items with and without links
- Fixes for buttons, alerts and dropdowns in Edge
- Allow buttons to fill the height of their host

## [v1.0.0-beta.8] - Sep 3rd 2019

### Added

- Adds a boolean "disableEscape" prop to calcite-modal to make closing on escape optional.

## [v1.0.0-beta.7] - Aug 30th 2019

### Added

- Adds support for dropdown items as links
- Updates toggle styling and adds props for scale

## [v1.0.0-beta.6] - Aug 26th 2019

### Fixed

- `calcite-tree-item`s with both a `<a>` and a `calcite-tree`

## [v1.0.0-beta.5] - Aug 21th 2019

### Added

- adds scale prop to `calcite-radio-group`
- updates style of `calcite-radio-group`
- adds transparent appearance style for `calcite-button`
- adds `iconposition` prop to `calcite-button`
- updates dark theme style for `calcite-button`
- updates theme for `calcite-tree`
- adds support for disabled `calcite-button`

### Fixed

- fix width of medium/large modals with narrow contents

## [v1.0.0-beta.4] - Aug 19th 2019

### Added

- dark theme for `calcite-slider`
- added `<calcite-dropdown>`
- added `<calcite-tree>`

### Fixed

- solved issue with incorrect positioning of handle in `calcite-slider`
- fix various issue in Edge

## [v1.0.0-beta.3] - Aug 16th 2019

### Added

- date picker keyboard support
- date picker page-up and page-down buttons
- pre-render support for existing components

### Fixed

- style updates/dark theme for buttons
- fixed styling of modals in firefox
- fixed radio-group styling in Edge
- pointed calcite-base to correct npm version

## [v1.0.0-beta.2] - Aug 2nd 2019

Fix issue with previous release.

## [v1.0.0-beta.1] - Aug 2nd 2019

First initial beta release.

[v1.0.0-beta.32]: https://github.com/Esri/calcite-components/compare/v1.0.0-beta.31...v1.0.0-beta.32 "v1.0.0-beta.32"
[v1.0.0-beta.31]: https://github.com/Esri/calcite-components/compare/v1.0.0-beta.30...v1.0.0-beta.31 "v1.0.0-beta.31"
[v1.0.0-beta.30]: https://github.com/Esri/calcite-components/compare/v1.0.0-beta.29...v1.0.0-beta.30 "v1.0.0-beta.30"
[v1.0.0-beta.29]: https://github.com/Esri/calcite-components/compare/v1.0.0-beta.28...v1.0.0-beta.29 "v1.0.0-beta.29"
[v1.0.0-beta.28]: https://github.com/Esri/calcite-components/compare/v1.0.0-beta.27...v1.0.0-beta.28 "v1.0.0-beta.28"
[v1.0.0-beta.27]: https://github.com/Esri/calcite-components/compare/v1.0.0-beta.26...v1.0.0-beta.27 "v1.0.0-beta.27"
[v1.0.0-beta.26]: https://github.com/Esri/calcite-components/compare/v1.0.0-beta.25...v1.0.0-beta.26 "v1.0.0-beta.26"
[v1.0.0-beta.25]: https://github.com/Esri/calcite-components/compare/v1.0.0-beta.24...v1.0.0-beta.25 "v1.0.0-beta.25"
[v1.0.0-beta.24]: https://github.com/Esri/calcite-components/compare/v1.0.0-beta.23...v1.0.0-beta.24 "v1.0.0-beta.24"
[v1.0.0-beta.23]: https://github.com/Esri/calcite-components/compare/v1.0.0-beta.22...v1.0.0-beta.23 "v1.0.0-beta.23"
[v1.0.0-beta.22]: https://github.com/Esri/calcite-components/compare/v1.0.0-beta.21...v1.0.0-beta.22 "v1.0.0-beta.22"
[v1.0.0-beta.21]: https://github.com/Esri/calcite-components/compare/v1.0.0-beta.20...v1.0.0-beta.21 "v1.0.0-beta.21"
[v1.0.0-beta.20]: https://github.com/Esri/calcite-components/compare/v1.0.0-beta.19...v1.0.0-beta.20 "v1.0.0-beta.20"
[v1.0.0-beta.19]: https://github.com/Esri/calcite-components/compare/v1.0.0-beta.18...v1.0.0-beta.19 "v1.0.0-beta.19"
[v1.0.0-beta.18]: https://github.com/Esri/calcite-components/compare/v1.0.0-beta.17...v1.0.0-beta.18 "v1.0.0-beta.18"
[v1.0.0-beta.17]: https://github.com/Esri/calcite-components/compare/v1.0.0-beta.16...v1.0.0-beta.17 "v1.0.0-beta.17"
[v1.0.0-beta.16]: https://github.com/Esri/calcite-components/compare/v1.0.0-beta.15...v1.0.0-beta.16 "v1.0.0-beta.16"
[v1.0.0-beta.15]: https://github.com/Esri/calcite-components/compare/v1.0.0-beta.14...v1.0.0-beta.15 "v1.0.0-beta.15"
[v1.0.0-beta.14]: https://github.com/Esri/calcite-components/compare/v1.0.0-beta.13...v1.0.0-beta.14 "v1.0.0-beta.14"
[v1.0.0-beta.13]: https://github.com/Esri/calcite-components/compare/v1.0.0-beta.12...v1.0.0-beta.13 "v1.0.0-beta.13"
[v1.0.0-beta.12]: https://github.com/Esri/calcite-components/compare/v1.0.0-beta.11...v1.0.0-beta.12 "v1.0.0-beta.12"
[v1.0.0-beta.11]: https://github.com/Esri/calcite-components/compare/v1.0.0-beta.10...v1.0.0-beta.11 "v1.0.0-beta.11"
[v1.0.0-beta.10]: https://github.com/Esri/calcite-components/compare/v1.0.0-beta.9...v1.0.0-beta.10 "v1.0.0-beta.10"
[v1.0.0-beta.9]: https://github.com/Esri/calcite-components/compare/v1.0.0-beta.8...v1.0.0-beta.9 "v1.0.0-beta.9"
[v1.0.0-beta.8]: https://github.com/Esri/calcite-components/compare/v1.0.0-beta.7...v1.0.0-beta.8 "v1.0.0-beta.8"
[v1.0.0-beta.7]: https://github.com/Esri/calcite-components/compare/v1.0.0-beta.6...v1.0.0-beta.7 "v1.0.0-beta.7"
[v1.0.0-beta.6]: https://github.com/Esri/calcite-components/compare/v1.0.0-beta.5...v1.0.0-beta.6 "v1.0.0-beta.6"
[v1.0.0-beta.5]: https://github.com/Esri/calcite-components/compare/v1.0.0-beta.4...v1.0.0-beta.5 "v1.0.0-beta.5"
[v1.0.0-beta.4]: https://github.com/Esri/calcite-components/compare/v1.0.0-beta.3...v1.0.0-beta.4 "v1.0.0-beta.4"
[v1.0.0-beta.3]: https://github.com/Esri/calcite-components/compare/v1.0.0-beta.2...v1.0.0-beta.3 "v1.0.0-beta.3"
[v1.0.0-beta.2]: https://github.com/Esri/calcite-components/compare/v1.0.0-beta.1...v1.0.0-beta.2 "v1.0.0-beta.2"
[v1.0.0-beta.1]: https://github.com/Esri/calcite-components/compare/dafb2312835ec6fef134d0d2b20aabd1dfe907cf...v1.0.0-beta.1 "v1.0.0-beta.1"
[head]: https://github.com/Esri/calcite-components/compare/v1.0.0-beta.21...HEAD "Unreleased Changes"
