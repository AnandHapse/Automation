# Cursor / VS Code Commands — Mac

Reference tables for Cursor / VS Code, terminal, Git, and SSH on **macOS** (Terminal / zsh / bash).

---

## 1. Cursor / VS Code keyboard shortcuts (Mac)

| Action | Shortcut |
|--------|----------|
| Command Palette | `Cmd + Shift + P` |
| Quick Open (file) | `Cmd + P` |
| Open Settings | `Cmd + ,` |
| Open Keyboard Shortcuts | `Cmd + K` then `Cmd + S` |
| Toggle Terminal | `Ctrl + `` ` `` (backtick) |
| New Terminal | `Ctrl + Shift + `` ` ``` |
| Split Terminal | `Cmd + \` (or check Terminal: Split) |
| Toggle Sidebar | `Cmd + B` |
| Toggle Explorer | `Cmd + Shift + E` |
| Search in files | `Cmd + Shift + F` |
| Replace in files | `Cmd + Shift + H` |
| Go to Line | `Ctrl + G` |
| Go to Definition | `F12` |
| Peek Definition | `Option + F12` |
| Find References | `Shift + F12` |
| Rename Symbol | `F2` |
| Format Document | `Shift + Option + F` |
| Save | `Cmd + S` |
| Save All | `Cmd + Option + S` |
| Close Editor | `Cmd + W` |
| Close Window | `Cmd + Shift + W` |
| New File | `Cmd + N` |
| New Window | `Cmd + Shift + N` |
| Open Folder | `Cmd + O` |
| Zen Mode | `Cmd + K` then `Z` |
| Toggle Word Wrap | `Option + Z` |
| Multi-cursor (add next) | `Cmd + D` |
| Multi-cursor (add click) | `Option + Click` |
| Select all occurrences | `Cmd + Shift + L` |
| Comment line | `Cmd + /` |
| Block comment | `Shift + Option + A` |
| Indent | `Cmd + ]` |
| Outdent | `Cmd + [` |
| Move line up | `Option + Up` |
| Move line down | `Option + Down` |
| Copy line up | `Shift + Option + Up` |
| Copy line down | `Shift + Option + Down` |
| Undo | `Cmd + Z` |
| Redo | `Cmd + Shift + Z` |
| Soft Undo (cursor) | `Cmd + U` |
| Toggle Panel | `Cmd + J` |
| Problems panel | `Cmd + Shift + M` |
| Output panel | `Cmd + Shift + U` |
| Source Control | `Ctrl + Shift + G` |
| Extensions | `Cmd + Shift + X` |
| Run / Debug | `Cmd + Shift + D` |
| Start Debugging | `F5` |
| Step Over | `F10` |
| Step Into | `F11` |
| Step Out | `Shift + F11` |
| Stop Debugging | `Shift + F5` |
| Cursor Chat | `Cmd + L` (or Cursor Chat shortcut if customized) |
| Cursor Composer / Agent | `Cmd + I` (or check Command Palette: “Cursor”) |

---

## 2. Terminal & navigation (Mac)

| Action | Command |
|--------|---------|
| Show current folder | `pwd` |
| Change directory | `cd ~/Projects/Automation` |
| List files | `ls` |
| List detailed | `ls -la` |
| Clear screen | `clear` |
| Home folder | `~` or `$HOME` |
| Open SSH folder | `cd ~/.ssh` |
| List SSH files | `ls -la ~/.ssh` |
| Edit SSH config | `nano ~/.ssh/config` or `code ~/.ssh/config` |
| Show file content | `cat filename` |
| Copy public key to clipboard | `pbcopy < ~/.ssh/anand-personal.pub` |
| Run JS file (Node) | `node 01_chapter_JavaScript/01_helloworld.js` |

> On Mac, `~` means your home directory (e.g. `/Users/YourName`).

---

## 3. Git — everyday workflow

| Action | Command |
|--------|---------|
| Check status | `git status` |
| See remotes | `git remote -v` |
| See branches | `git branch` |
| Stage all changes | `git add .` |
| Stage one file | `git add path/to/file.js` |
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

## 6. SSH — dual account setup (Mac)

| Action | Command |
|--------|---------|
| List SSH keys | `ls -la ~/.ssh` |
| Create personal key | `ssh-keygen -t ed25519 -C "anand.hapse27@gmail.com" -f ~/.ssh/anand-personal` |
| Show public key | `cat ~/.ssh/anand-personal.pub` |
| Copy public key | `pbcopy < ~/.ssh/anand-personal.pub` |
| Edit SSH config | `nano ~/.ssh/config` |
| Restrict config permissions | `chmod 600 ~/.ssh/config` |
| Restrict private key permissions | `chmod 600 ~/.ssh/anand-personal` |
| Test office SSH | `ssh -T git@github.com-office` |
| Test personal SSH | `ssh -T git@github.com-personal` |
| Start ssh-agent | `eval "$(ssh-agent -s)"` |
| Add key to agent | `ssh-add ~/.ssh/anand-personal` |

### Example `~/.ssh/config`

```text
# Office GitHub (anand.hapse@ankpal.com)
Host github.com-office
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_rsa
  IdentitiesOnly yes

# Personal GitHub (AnandHapse / anand.hapse27@gmail.com)
Host github.com-personal
  HostName github.com
  User git
  IdentityFile ~/.ssh/anand-personal
  IdentitiesOnly yes
```

| Expected test result | Meaning |
|----------------------|---------|
| `Hi 27Anand! ...` | Office key OK |
| `Hi AnandHapse! ...` | Personal key OK |

> SSH `config` must be a **file**, not a folder.

---

## 7. Full push sequence (personal repo on Mac)

| Step | Command |
|------|---------|
| 1. Go to project | `cd ~/path/to/Automation` |
| 2. Set personal identity | `git config user.name "AnandHapse"` |
| 3. Set personal email | `git config user.email "anand.hapse27@gmail.com"` |
| 4. Point remote to personal host | `git remote set-url origin git@github.com-personal:AnandHapse/Automation.git` |
| 5. Stage | `git add .` |
| 6. Commit | `git commit -m "your message"` |
| 7. Push | `git push -u origin main` |

---

## 8. Common mistakes (Mac)

| Mistake | Fix |
|---------|-----|
| Wrong key used for push | Use `github.com-personal` / `github.com-office` in remote URL |
| Push denied to wrong account | Re-check `ssh -T` and remote URL |
| Commit shows office user on personal repo | Set `user.email` to personal Gmail for that repo |
| Permission denied (publickey) | Run `ssh-add ~/.ssh/anand-personal` and `chmod 600` on key/config |
