# Troubleshooting Guide

Common issues and how to fix them.

---

## 🔧 Build & Development Issues

### Issue: Changes not showing in browser

**Symptoms:**
- Made edits to data files
- Browser still shows old content

**Solutions:**

1. **Hard refresh the browser**
   - Chrome/Edge: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
   - Firefox: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
   - Safari: `Cmd+Option+R`

2. **Check dev server is running**
   ```bash
   # Should see "Ready" in terminal
   npm run dev
   ```

3. **Restart dev server**
   ```bash
   # Press Ctrl+C to stop, then:
   npm run dev
   ```

4. **Clear Next.js cache**
   ```bash
   rm -rf .next
   npm run dev
   ```

---

### Issue: TypeScript errors in terminal

**Symptoms:**
```
Type error: Property 'slug' does not exist on type...
```

**Solutions:**

1. **Check for syntax errors**
   - Missing commas between array items
   - Missing quotes around strings
   - Unmatched brackets `{}` or `[]`

2. **Verify required fields**
   All case studies need:
   - `id`, `slug`, `title`, `subtitle`, `category`
   - `tags`, `heroImage`, `thumbnail`
   - `problem`, `approach`, `solution`
   - `impact`, `learnings`, `timeline`, `role`, `teamSize`, `technologies`

3. **Check field types**
   ```typescript
   // ✅ Correct
   id: 'cs-1',              // string
   teamSize: 10,            // number
   tags: ["AI", "ML"],      // array of strings

   // ❌ Wrong
   id: cs-1,                // missing quotes
   teamSize: "10",          // should be number
   tags: "AI, ML",          // should be array
   ```

4. **Copy from working example**
   - Open `data/case-studies.ts`
   - Copy an existing case study
   - Modify with your content

---

### Issue: Build fails with npm run build

**Symptoms:**
```
Error: Failed to compile
```

**Solutions:**

1. **Check for TypeScript errors**
   ```bash
   npm run build
   # Read error messages carefully
   ```

2. **Validate JSON-like syntax**
   - All strings in quotes
   - Commas after each property (except last)
   - No trailing commas in arrays

3. **Test individual files**
   ```bash
   # Check specific file
   npx tsc data/case-studies.ts --noEmit
   ```

4. **Reset node modules**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```

---

## 🖼️ Image Issues

### Issue: Images not loading

**Symptoms:**
- Broken image icon
- Alt text showing instead of image

**Solutions:**

1. **Check image exists**
   ```bash
   ls public/images/case-studies/
   # Verify your image file is listed
   ```

2. **Check image path format**
   ```typescript
   // ✅ Correct
   heroImage: "/images/case-studies/project-hero.jpg",

   // ❌ Wrong
   heroImage: "public/images/case-studies/project-hero.jpg",  // no "public"
   heroImage: "images/case-studies/project-hero.jpg",         // missing leading "/"
   heroImage: "/images/case-studies/project-hero.png",        // wrong extension
   ```

3. **Check filename matches exactly**
   - Filenames are case-sensitive
   - `Project-Hero.jpg` ≠ `project-hero.jpg`

   ```bash
   # Check actual filename
   ls -la public/images/case-studies/
   ```

4. **Verify image format**
   - Supported: `.jpg`, `.jpeg`, `.png`, `.webp`, `.svg`
   - Not supported: `.tiff`, `.bmp`, `.heic`

5. **Check image size**
   - Large images may fail to load
   - Keep under 5MB (ideally under 500KB)
   - Compress at [TinyPNG](https://tinypng.com/)

6. **Create missing directory**
   ```bash
   mkdir -p public/images/case-studies
   ```

---

### Issue: Images are slow to load

**Solutions:**

1. **Compress images**
   - Use [TinyPNG](https://tinypng.com/)
   - Target: < 500KB per image

2. **Use correct dimensions**
   - Hero: 1200x600px
   - Thumbnail: 600x400px
   - Don't upload 4000x3000px originals

3. **Convert to modern formats**
   - WebP is ideal (smaller file size)
   - Use [Squoosh](https://squoosh.app/) to convert

---

## 📝 Content Issues

### Issue: Markdown not rendering

**Symptoms:**
- Asterisks showing instead of bold
- Line breaks not working

**Solutions:**

1. **Use backticks for multiline strings**
   ```typescript
   // ✅ Correct
   problem: `
   This is **bold** text.

   This is a new paragraph.
   `,

   // ❌ Wrong
   problem: "This is **bold** text.",
   ```

2. **Check markdown syntax**
   ```markdown
   **bold text**
   *italic text*

   - Bullet point 1
   - Bullet point 2

   1. Numbered item
   2. Another item
   ```

3. **Use proper line breaks**
   - Two line breaks create new paragraph
   - One line break is ignored

---

### Issue: Content looks garbled

**Symptoms:**
- All text on one line
- Weird spacing

**Solutions:**

1. **Check for `.trim()`**
   ```typescript
   // Use .trim() for cleaner formatting
   problem: `
     Text here
   `.trim(),
   ```

2. **Remove extra whitespace**
   ```typescript
   // ✅ Good
   problem: `First paragraph.

   Second paragraph.`,

   // ❌ Bad spacing
   problem: `   First paragraph.



           Second paragraph.`,
   ```

---

### Issue: Case study not appearing on site

**Solutions:**

1. **Check slug is unique**
   ```bash
   # Search for duplicates
   grep -n "slug:" data/case-studies.ts
   ```

2. **Verify it's in the array**
   ```typescript
   export const caseStudiesData: CaseStudy[] = [
     { id: 'cs-1', ... },
     { id: 'cs-2', ... },
     { id: 'cs-3', ... },  // ← Don't forget comma
     { id: 'cs-4', ... },  // ← Your new case study
   ];
   ```

3. **Check closing brackets**
   - Each case study object needs closing `}`
   - Array needs closing `]`
   - Parentheses need closing `)`

4. **Restart dev server**
   ```bash
   # Ctrl+C to stop
   npm run dev
   ```

---

## 🌐 Deployment Issues

### Issue: Site works locally but not in production

**Solutions:**

1. **Test production build locally**
   ```bash
   npm run build
   npm start
   # Check http://localhost:3000
   ```

2. **Check environment variables**
   - Create `.env.local` for local secrets
   - Add to Vercel dashboard for production

3. **Check build logs**
   - Vercel: View deployment logs
   - Look for errors in "Build" tab

4. **Verify Node version**
   ```bash
   # Check local version
   node --version

   # Should be 18+
   # Update in package.json if needed:
   "engines": {
     "node": ">=18.0.0"
   }
   ```

---

### Issue: Images work locally but not in production

**Solutions:**

1. **Check git tracking**
   ```bash
   git status
   # Images should be tracked

   # If not tracked:
   git add public/images/case-studies/*
   git commit -m "Add case study images"
   git push
   ```

2. **Check `.gitignore`**
   ```bash
   # Make sure public/images is NOT in .gitignore
   cat .gitignore | grep images
   ```

3. **Verify image paths**
   - Must start with `/images/` not `./images/`
   - Must not include `public/` in path

---

## ⚡ Performance Issues

### Issue: Site is slow

**Solutions:**

1. **Optimize images**
   - Compress all images
   - Use appropriate dimensions
   - Consider WebP format

2. **Check bundle size**
   ```bash
   npm run build
   # Check "First Load JS" sizes
   # Should be < 200KB for most pages
   ```

3. **Remove unused dependencies**
   ```bash
   npm prune
   ```

4. **Enable caching**
   - Vercel does this automatically
   - For self-hosting, configure CDN

---

## 💻 Editor Issues

### Issue: TypeScript errors in VS Code

**Solutions:**

1. **Reload VS Code**
   - `Cmd+Shift+P` → "Reload Window"

2. **Check TypeScript version**
   ```bash
   npm list typescript
   # Should be 5.x
   ```

3. **Restart TS server**
   - `Cmd+Shift+P` → "TypeScript: Restart TS Server"

4. **Check `tsconfig.json`**
   - Should include `"strict": true`
   - Should include all data files

---

## 🔍 Debugging Tips

### General debugging workflow:

1. **Check browser console**
   - Open DevTools (F12)
   - Look for errors in Console tab

2. **Check terminal output**
   - Dev server shows compilation errors
   - Read error messages carefully

3. **Check git diff**
   ```bash
   git diff data/case-studies.ts
   # What changed since last working version?
   ```

4. **Revert to last working state**
   ```bash
   git checkout data/case-studies.ts
   # Start over with clean slate
   ```

5. **Test incrementally**
   - Add content bit by bit
   - Test after each change
   - Easier to find what broke

---

## 📞 Getting Help

### Before asking for help:

1. **Check the error message**
   - Read it carefully
   - Google the exact error message

2. **Check these docs**
   - [Content Guide](CONTENT_GUIDE.md)
   - [Examples](EXAMPLES.md)
   - [Quick Reference](QUICK_REFERENCE.md)

3. **Try the solutions above**
   - Most issues have standard fixes

### When asking for help:

Include:
- What you were trying to do
- Exact error message (copy-paste)
- What you already tried
- Screenshots if relevant
- Your OS and Node version

---

## 🛠️ Useful Commands

```bash
# Check Node version
node --version

# Check npm version
npm --version

# Install missing dependencies
npm install

# Clear all caches
rm -rf .next node_modules package-lock.json
npm install

# Check for outdated packages
npm outdated

# Update packages
npm update

# Check for security vulnerabilities
npm audit

# Fix security issues
npm audit fix

# Format code (if using Prettier)
npx prettier --write .

# Lint code
npm run lint
```

---

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev/)
- [MDN Web Docs](https://developer.mozilla.org/)

---

## ✅ Prevention Tips

Avoid issues before they happen:

1. **Test locally before deploying**
   ```bash
   npm run build && npm start
   ```

2. **Commit frequently**
   ```bash
   git add .
   git commit -m "Add new case study"
   # Easy to revert if something breaks
   ```

3. **Keep backups**
   - Git is your friend
   - Push to GitHub regularly

4. **Follow templates**
   - Copy existing working examples
   - Modify incrementally

5. **Use linting**
   ```bash
   npm run lint
   # Catches issues early
   ```

---

**Still stuck?** Open an issue on GitHub or reach out for help!
