---
title: "THM Blue Room — EternalBlue Walkthrough"
date: "2025-05-12"
type: "thm"
tags: ["windows", "smb", "eternalblue"]
summary: "My first Windows exploitation room. Notes on what I understood and what confused me."
---

## What this room is about

Blue is a beginner-friendly TryHackMe room that walks you through exploiting MS17-010, also known as EternalBlue — the vulnerability behind the WannaCry ransomware outbreak in 2017.

## What I did

Ran an nmap scan to identify open ports, found SMB on port 445, confirmed the MS17-010 vulnerability, then used Metasploit to get a shell.

## What actually clicked

The exploit works because older versions of Windows SMB didn't properly validate certain packet sizes. Metasploit handles the heavy lifting but understanding *why* the vulnerability exists made it stick.

## What confused me

I initially didn't understand why we needed to migrate processes after getting the shell. Short answer: the initial shell process is unstable, migrating to a more stable process like `winlogon.exe` keeps your access alive.

## Commands I used

```bash
nmap -sV -sC -p- <target-ip>
use exploit/windows/smb/ms17_010_eternalblue
set RHOSTS <target-ip>
run
```

## Rating

Beginner friendly. Good introduction to Windows exploitation and Metasploit basics.