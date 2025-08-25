# Contributing to the project

## Table of contents

- [Commit Message Format](#format)
  - [About the 1st line of the commit message](#format-1)
  - [About a revert commit](#format-2)
- [Types & Emojis](#emojis)
- [Types](#types)
- [Scopes](#scopes)
  - [Notes](#scopes-1)
- [Subject](#subject)

## <a name="format"></a> Commit Message Format

### <a name="format-1"></a> About the 1st line of the commit message, we use:

- [Angular's "Commit Message Format"](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit) _(`<type>(<scope>): <subject>`)_
- emojis from these projects:

  - [commit-message-emoji](https://github.com/dannyfritz/commit-message-emoji#which-emoji-to-use-) by default
  - [gitmoji](https://gitmoji.dev/) as a complement

    Note: The emoji must be:

    - placed between the `(<scope>):` and the `<subject>`
    - related to the `<type>`
    - wrapped by a space

- Commit message with `!` (and optional `BREAKING CHANGE` footer) to draw attention to breaking change\
  See [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#commit-message-with-both--and-breaking-change-footer)

  📝 E.g.:

  ```
  chore(api)!: 🔧 💥 drop support for Node 6

  BREAKING CHANGE: use JavaScript features not available in Node 6
  ```

- the convention to put [72 characters at the maximum](https://www.midori-global.com/blog/2018/04/02/git-50-72-rule)
- the list of the scopes defined in the project

📝 E.g.:

```
feat(admin): ✨ prevent picking a billing date 30+ days from today
feat(website): 💄 add "black friday" UI
refactor(admin): ♻️ use dedicated hook to manage downgrade modal
fix(api): 🐛 hide `penaltyInvoices` insert if empty in returned email
chore(admin): 🔧 add `DowngradeOrder` mutation
style(admin): 🎨 sort imports automatically
```

### <a name="format-2"></a> About a revert commit:

- The 1st line should contain the emoji & subject of the original commit wrapped by `revert(<scope>): ⏪ [` and `]`
- The scope must be the same one as the original commit
- The 2nd line should mention `Refs:` followed by the hash of the commit to revert _(this syntax is used by [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#how-does-conventional-commits-handle-revert-commits))_

📝 E.g.:

This commit message:

```
feat(website): 💄 display error message for mobile on info page
```

will have the following message for the revert commit:

```
revert(website): ⏪ [💄 display error message for mobile on info page]

Refs: df5deed46c78e400dca1d01eaf3d20fe4f33a294
```

## <a name="emojis"></a> Types & Emojis

| Commit Purpose                         | Type                  | Emoji | Link (for copy/paste)                                                                        |
| -------------------------------------- | --------------------- | ----- | -------------------------------------------------------------------------------------------- |
| New feature for the user               | feat                  | ✨    | [Sparkles](https://emojipedia.org/sparkles/)                                                 |
| Bug fix for the user                   | fix                   | 🐛    | [Bug](https://emojipedia.org/bug/)                                                           |
| Refactoring (eg: renaming a variable)  | refactor              | ♻️    | [Black Universal Recycling Symbol](https://emojipedia.org/black-universal-recycling-symbol/) |
| Formatting (no production code change) | style                 | 🎨    | [Artist Palette](https://emojipedia.org/artist-palette/)                                     |
| Tooling / package.json / CI            | chore / ci            | 🔧    | [Wrench](https://emojipedia.org/wrench/)                                                     |
| Removal                                | chore                 | 🗑️    | [Wastebasket](https://emojipedia.org/wastebasket/)                                           |
| Revert                                 | chore / revert        | ⏪    | [Fast Reverse Button](https://emojipedia.org/fast-reverse-button/)                           |
| Version Tag                            | chore                 | 🔖    | [Bookmark](https://emojipedia.org/bookmark/)                                                 |
| Tests                                  | test                  | 🚨    | [Police Cars Revolving Light](https://emojipedia.org/police-cars-revolving-light/)           |
| Performance                            | perf                  | 🐎    | [Horse](https://emojipedia.org/horse/)                                                       |
| Documentation / JSDoc / Typing         | docs                  | 📚    | [Books](https://emojipedia.org/books/)                                                       |
| UI / style files                       | feat / fix / refactor | 💄    | [Lipstick](https://emojipedia.org/lipstick/)                                                 |
| -                                      |                       |       |                                                                                              |
| Internationalization                   | \*                    | 🌐    | [Globe With Meridians](https://emojipedia.org/globe-with-meridians/)                         |
| Work In Progress (WIP)                 | \*                    | 🚧    | [Construction Sign](https://emojipedia.org/construction-sign/)                               |
| Security Fix                           | fix                   | 🔒    | [Lock](https://emojipedia.org/lock/)                                                         |
| Metadata                               | chore                 | 📇    | [Card Index](https://emojipedia.org/card-index/)                                             |
| Accessibility                          | feat                  | ♿    | [Wheelchair](https://emojipedia.org/wheelchair-symbol/)                                      |
| Deprecation                            | \*                    | 💩    | [Pile of Poo](https://emojipedia.org/pile-of-poo/)                                           |

Additional emojis:

| Purpose                                             | Emoji | Link (for copy/paste)                                                  |
| --------------------------------------------------- | ----- | ---------------------------------------------------------------------- |
| Merge commit in `develop`                           | 🔀    | [Shuffle Tracks Button](https://emojipedia.org/shuffle-tracks-button/) |
| Merge commit in `master`                            | 🚀    | [Rocket](https://emojipedia.org/rocket/)                               |
| Commit with breaking change                         | 💥    | [Collision](https://emojipedia.org/collision/)                         |
| Commit in code review (to be squashed before merge) | ⚡    | [High Voltage](https://emojipedia.org/high-voltage/)                   |

## <a name="types"></a> Types

- chore
- ci
- docs
- feat
- fix
- perf
- refactor
- revert
- style
- test

## <a name="scopes"></a> Scopes

They are simply related to a package of the project

### <a name="scopes-1"></a> Notes

- A commit in a pull request should impact only 1 scope
- If a commit impacts multiple scopes _(potentially merge commits)_, add the character `&` _(wrapped by a space)_ between each scope

📝 E.g.:

```
🔀 feat(admin & api): ✨ add downgrade with partial capture
```

## <a name="subject"></a> Subject

- Use the imperative, present tense: `change` not `changed` nor `changes`
- Don't capitalize the first letter
- No dot _(`.`)_ at the end
