# Cursor / VS Code Commands — Windows

Reference tables for Cursor / VS Code, terminal, Git, and SSH on **Windows** (CMD, PowerShell, or Git Bash where noted).

---

## 1. Cursor / VS Code keyboard shortcuts (Windows)

| Action | Shortcut |
|--------|----------|
| Command Palette | `Ctrl + Shift + P` |
| Quick Open (file) | `Ctrl + P` |
| Open Settings | `Ctrl + ,` |
| Open Keyboard Shortcuts | `Ctrl + K` then `Ctrl + S` |
| Toggle Terminal | `Ctrl + `` ` `` (backtick) |
| New Terminal | `Ctrl + Shift + `` ` `` |
| Split Terminal | `Ctrl + Shift + 5` |
| Toggle Sidebar | `Ctrl + B` |
| Toggle Explorer | `Ctrl + Shift + E` |
| Search in files | `Ctrl + Shift + F` |
| Replace in files | `Ctrl + Shift + H` |
| Go to Line | `Ctrl + G` |
| Go to Definition | `F12` |
| Peek Definition | `Alt + F12` |
| Find References | `Shift + F12` |
| Rename Symbol | `F2` |
| Format Document | `Shift + Alt + F` |
| Save | `Ctrl + S` |
| Save All | `Ctrl + K` then `S` |
| Close Editor | `Ctrl + W` |
| Close Window | `Alt + F4` |
| New File | `Ctrl + N` |
| New Window | `Ctrl + Shift + N` |
| Open Folder | `Ctrl + K` then `Ctrl + O` |
| Zen Mode | `Ctrl + K` then `Z` |
| Toggle Word Wrap | `Alt + Z` |
| Multi-cursor (add next) | `Ctrl + D` |
| Multi-cursor (add click) | `Alt + Click` |
| Select all occurrences | `Ctrl + Shift + L` |
| Comment line | `Ctrl + /` |
| Block comment | `Shift + Alt + A` |
| Indent | `Ctrl + ]` |
| Outdent | `Ctrl + [` |
| Move line up | `Alt + Up` |
| Move line down | `Alt + Down` |
| Copy line up | `Shift + Alt + Up` |
| Copy line down | `Shift + Alt + Down` |
| Undo | `Ctrl + Z` |
| Redo | `Ctrl + Y` |
| Soft Undo (cursor) | `Ctrl + U` |
| Toggle Panel | `Ctrl + J` |
| Problems panel | `Ctrl + Shift + M` |
| Output panel | `Ctrl + Shift + U` |
| Source Control | `Ctrl + Shift + G` |
| Extensions | `Ctrl + Shift + X` |
| Run / Debug | `Ctrl + Shift + D` |
| Start Debugging | `F5` |
| Step Over | `F10` |
| Step Into | `F11` |
| Step Out | `Shift + F11` |
| Stop Debugging | `Shift + F5` |
| Cursor Chat | `Ctrl + L` (or Cursor Chat shortcut if customized) |
| Cursor Composer / Agent | `Ctrl + I` (or check Command Palette: “Cursor”) |

---

## 2. Terminal & navigation (Windows)

| Action | CMD / PowerShell | Git Bash |
|--------|------------------|----------|
| Show current folder | `cd` | `pwd` |
| Change directory | `cd "D:\Playwright Automation\Automation"` | `cd "/d/Playwright Automation/Automation"` |
| List files | `dir` | `ls` |
| Clear screen | `cls` | `clear` |
| Home folder path | `%USERPROFILE%` or `$env:USERPROFILE` | `~` or `$HOME` |
| Open SSH folder | `cd %USERPROFILE%\.ssh` | `cd ~/.ssh` |
| Open file in Notepad | `notepad C:\Users\Ankpal\.ssh\config` | `notepad ~/.ssh/config` |
| Show file content | `type filename` | `cat filename` |
| Run JS file (Node) | `node 01_chapter_JavaScript\01_helloworld.js` | `node 01_chapter_JavaScript/01_helloworld.js` |

> On Windows CMD, `~` is **not** home. Use `C:\Users\YourName\` or `%USERPROFILE%`.

---

## 3. Git — everyday workflow

| Action | Command |
|--------|---------|
| Check status | `git status` |
| See remotes | `git remote -v` |
| See branches | `git branch` |
| Stage all changes | `git add .` |
| Stage one file | `git add path\to\file.js` |
| Commit | `git commit -m "your message"` |
| First push (set upstream) | `git push -u origin main` |
| Push current branch | `git push` |
| Pull latest | `git pull` |
| Pull with rebase | `git pull origin main --rebase` |
| Switch branch | `git checkout develop` |
| Create + switch branch | `git checkout -b feature/my-feature` |
| See commit log | `git log --oneline` |
| See diff | `git diff` |
| Init git-flow | `git flow init` |

---

## 4. Git — identity (this repo only)

| Action | Command |
|--------|---------|
| Show name | `git config user.name` |
| Show email | `git config user.email` |
| Set personal name (repo) | `git config user.name "AnandHapse"` |
| Set personal email (repo) | `git config user.email "anand.hapse27@gmail.com"` |
| Set office name (repo) | `git config user.name "Anand Hapse"` |
| Set office email (repo) | `git config user.email "anand.hapse@ankpal.com"` |
| Set global identity | `git config --global user.name "..."` / `user.email "..."` |

> Prefer **repo-level** config so personal and office projects stay separate.

---

## 5. Git — remotes (dual GitHub accounts)

| Action | Command |
|--------|---------|
| Personal remote | `git remote set-url origin git@github.com-personal:AnandHapse/RepoName.git` |
| Office remote | `git remote set-url origin git@github.com-office:27Anand/RepoName.git` |
| Verify remote | `git remote -v` |

| Account | Remote URL pattern |
|---------|--------------------|
| Personal (AnandHapse) | `git@github.com-personal:AnandHapse/RepoName.git` |
| Office (27Anand) | `git@github.com-office:27Anand/RepoName.git` |

---

## 6. SSH — dual account setup (Windows)

| Action | Command |
|--------|---------|
| List SSH keys | `dir %USERPROFILE%\.ssh` (CMD) / `ls ~/.ssh` (Git Bash) |
| Create personal key | `ssh-keygen -t ed25519 -C "anand.hapse27@gmail.com" -f C:\Users\Ankpal\.ssh\anand-personal` |
| Show public key | `type C:\Users\Ankpal\.ssh\anand-personal.pub` |
| Edit SSH config | `notepad C:\Users\Ankpal\.ssh\config` |
| Restrict config permissions (Git Bash) | `chmod 600 ~/.ssh/config` |
| Test office SSH | `ssh -T git@github.com-office` |
| Test personal SSH | `ssh -T git@github.com-personal` |

### Example `C:\Users\Ankpal\.ssh\config`

```text
# Office GitHub (anand.hapse@ankpal.com)
Host github.com-office
  HostName github.com
  User git
  IdentityFile C:/Users/Ankpal/.ssh/id_rsa
  IdentitiesOnly yes

# Personal GitHub (AnandHapse / anand.hapse27@gmail.com)
Host github.com-personal
  HostName github.com
  User git
  IdentityFile C:/Users/Ankpal/.ssh/anand-personal
  IdentitiesOnly yes
```

| Expected test result | Meaning |
|----------------------|---------|
| `Hi 27Anand! ...` | Office key OK |
| `Hi AnandHapse! ...` | Personal key OK |

> SSH `config` must be a **file**, not a folder.

---

## 7. Full push sequence (personal repo on Windows)

| Step | Command |
|------|---------|
| 1. Go to project | `cd "D:\Playwright Automation\Automation"` |
| 2. Set personal identity | `git config user.name "AnandHapse"` |
| 3. Set personal email | `git config user.email "anand.hapse27@gmail.com"` |
| 4. Point remote to personal host | `git remote set-url origin git@github.com-personal:AnandHapse/Automation.git` |
| 5. Stage | `git add .` |
| 6. Commit | `git commit -m "your message"` |
| 7. Push | `git push -u origin main` |

---

## 8. Common mistakes (Windows)

| Mistake | Fix |
|---------|-----|
| Typing `~/.ssh/config` in CMD | Use `notepad C:\Users\Ankpal\.ssh\config` |
| `git push -u oriigin main` (typo) | Use `origin` |
| Push denied to wrong account | Use `github.com-personal` / `github.com-office` remotes |
| Commit shows office user on personal repo | Set `user.email` to personal Gmail for that repo |
