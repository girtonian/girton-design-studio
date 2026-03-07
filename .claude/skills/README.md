# Project Skills

This directory contains custom skills for the girton-design-studio project.

## Structure

Each skill should be in its own directory with a `SKILL.md` file:

```
.claude/skills/
├── README.md (this file)
└── your-skill-name/
    └── SKILL.md (required)
```

## Skill Format

**SKILL.md** structure:

```yaml
---
name: your-skill-name
description: Brief description of what this skill does and when to use it
user-invocable: true
allowed-tools: Read, Grep, Glob, Task  # Optional
---

# Your Skill Name

## Instructions
Step-by-step guidance for Claude...

## Examples
Concrete examples...
```

## Usage

Once a skill is created:
- **Auto-invoke**: Claude will automatically use it when your request matches the description
- **Manual invoke**: Type `/your-skill-name` to explicitly trigger it
- **List skills**: Use `/help` to see all available skills

## Resources

- [Official Skills Documentation](https://github.com/anthropics/claude-code)
- Skill metadata fields: `name`, `description`, `allowed-tools`, `model`, `context`, `hooks`, `user-invocable`
