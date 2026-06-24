---
title: 'Customizing your .vimrc file'
published: 2011-07-20
description: 'If you are using Linux and haven''t familiarized yourself with the world of VIM yet...then you need to rethink your text editing habits. Alright, so that''s a…'
tags: ['.vimrc', 'IDE', 'vim']
category: 'Software Development'
draft: false
---
If you are using Linux and haven't familiarized yourself with the world of VIM yet...then you need to rethink your text editing habits. Alright, so that's a little harsh, but did you know that with a few changes to your .vimrc file (stored in your home directory) you can mold VIM into a very powerful Integrated Development Environment (IDE)?! Then if you stack on a few plugins like 'Nerd Tree' and 'Exuberant C-Tags' you have an development environment that rivals any paid application.

Here are a few of my favorites:

" First turn on the plugins for the tabs and syntax highlighting
" Enable loading filetype and indentation plugins
filetype plugin on
filetype indent on

" Turn syntax highlighting on  
syntax on

" Use 2 spaces for (auto)indent  
set shiftwidth=2

" Don't highlight results of a search  
set nohlsearch

" When a bracket is inserted, briefly jump to a matching one  
set showmatch

Here's a full text copy of my .vimrc file. Keep in mind I have Exuberant C-Tags, Omni-Complete and Nerd Tree also in use so those are in my mappings.

"
" MAIN CUSTOMIZATION FILE
"

" Enable loading filetype and indentation plugins  
filetype plugin on  
filetype indent on

" Turn syntax highlighting on  
syntax on

"  
" GLOBAL SETTINGS  
"  
" Define Color scheme  
color delek

" Write contents of the file, if it has been modified, on buffer exit  
set autowrite

" Allow backspacing over everything  
set backspace=indent,eol,start

" Insert mode completion options  
set completeopt=menu,longest,preview

" Use UTF-8 as the default buffer encoding  
set enc=utf-8

" Remember up to 100 'colon' commmands and search patterns  
set history=100

" Enable incremental search  
set incsearch

" Always show status line, even for one window  
set laststatus=2

" Jump to matching bracket for 2/10th of a second (works with showmatch)  
set matchtime=2

" Don't highlight results of a search  
set nohlsearch

" Enable CTRL-A/CTRL-X to work on octal and hex numbers, as well as characters  
set nrformats=octal,hex,alpha

" Use F10 to toggle 'paste' mode  
set pastetoggle=<f10>

" Show line, column number, and relative position within a file in the status line  
set ruler

" Scroll when cursor gets within 3 characters of top/bottom edge  
set scrolloff=3

" Round indent to multiple of 'shiftwidth' for > and < commands  
set shiftround

" Use 4 spaces for (auto)indent  
set shiftwidth=2

" Show (partial) commands (or size of selection in Visual mode) in the status line  
set showcmd

" When a bracket is inserted, briefly jump to a matching one  
set showmatch

" Don't request terminal version string (for xterm)  
set t\_RV=

" Use 2 spaces for <tab> and :retab  
set tabstop=2

" Write swap file to disk after every 50 characters  
set updatecount=50

" Remember things between sessions  
"  
" '20  - remember marks for 20 previous files  
" "50 - save 50 lines for each register  
" :20  - remember 20 items in command-line history  
" %    - remember the buffer list (if vim started without a file arg)  
" n    - set name of viminfo file  
set viminfo='20,"50,:20,%,n~/.viminfo

" Use menu to show command-line completion (in 'full' case)  
set wildmenu

" Set command-line completion mode:  
"   - on first <tab>, when more than one match, list all matches and complete  
"     the longest common  string  
"   - on second <tab>, complete the next full match and show menu  
set wildmode=list:longest,full

" Go back to the position the cursor was on the last time this file was edited  
au BufReadPost \* if line("'"") > 0 && line("'"") <= line("$")|execute("normal \`"")|endif

" Fix my <backspace> key (in Mac OS X Terminal)  
set t\_kb=  
fixdel

" Avoid loading MatchParen plugin  
let loaded\_matchparen = 1

" netRW: Open files in a split window  
let g:netrw\_browse\_split = 1

"  
" MAPPINGS  
"

" save changes  
map ,s :w<cr>  
" exit vim without saving any changes  
map ,q :q!<cr>  
" exit vim saving changes  
map ,w :x<cr>  
" switch to upper/lower window quickly  
map <c-J> <c-W>j  
map <c-K> <c-W>k  
" use CTRL-F for omni completion  
imap <c-F>   
" map CTRL-L to piece-wise copying of the line above the current one  
imap <c-L> @@@<esc>hhkywjl?@@@<cr>P/@@@<cr>3s  
" map ,f to display all lines with keyword under cursor and ask which one to  
" jump to  
nmap ,f \[I:let nr = input("Which one: ")<bar>exe "normal " . nr ."\[t"<cr>  
" use <f6> to toggle line numbers  
nmap <silent> <f6> :set number!<cr>  
" page down with <space>  
nmap <space> <pageDown>  
" open filename under cursor in a new window (use current file's working  
" directory)  
nmap gf :new %:p:h/<cfile><cr>  
" map <alt-p> and <alt-P> to paste below/above and reformat  
nnoremap <esc>P  P'\[v'\]=  
nnoremap <esc>p  p'\[v'\]=  
" visual shifting (does not exit Visual mode)  
vnoremap < <gv  
vnoremap > >gv

" Generic highlight changes  
highlight Comment cterm=none ctermfg=Gray  
highlight IncSearch cterm=none ctermfg=Black ctermbg=DarkYellow  
highlight Search cterm=none ctermfg=Black ctermbg=DarkYellow  
highlight String cterm=none ctermfg=DarkGreen  
highlight treeDir cterm=none ctermfg=Cyan  
highlight treeUp cterm=none ctermfg=DarkYellow  
highlight treeCWD cterm=none ctermfg=DarkYellow  
highlight netrwDir cterm=none ctermfg=Cyan

" Set the <leader> for combo commands  
let mapleader = ","

nmap <silent> <c-n> :NERDTreeToggle<cr>
