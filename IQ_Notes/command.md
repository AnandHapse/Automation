# Command Notes (Cursor / VS Code)

OS-specific command sheets from our Cursor / VS Code workflow (shortcuts, terminal, Git, SSH dual accounts).

| File | OS |
|------|----|
| [command_windows.md](./command_windows.md) | Windows (CMD / PowerShell / Git Bash) |
| [command_mac.md](./command_mac.md) | macOS (Terminal / zsh / bash) |

## Quick reminder — dual GitHub accounts

| Account | Email | SSH Host alias | Remote URL pattern |
|---------|-------|----------------|--------------------|
| Personal | `anand.hapse27@gmail.com` | `github.com-personal` | `git@github.com-personal:AnandHapse/RepoName.git` |
| Office | `anand.hapse@ankpal.com` | `github.com-office` | `git@github.com-office:27Anand/RepoName.git` |

## Test SSH

```bash
ssh -T git@github.com-office
# Hi 27Anand! ...

ssh -T git@github.com-personal
# Hi AnandHapse! ...
```
