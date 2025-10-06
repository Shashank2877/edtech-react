# IIS Deployment Guide for NammaWeb React Application

## Issues Fixed

✅ **React Router URL Rewriting** - Fixed web.config to properly handle client-side routing
✅ **404 Error Handling** - Added custom error pages that redirect to React app
✅ **Asset Path Issues** - Configured relative paths for proper asset loading
✅ **MIME Type Support** - Added all necessary MIME types for modern web assets
✅ **Performance Optimization** - Enabled compression and caching

## Deployment Steps

### 1. Prerequisites
- IIS installed with URL Rewrite Module
- Application pool configured for "No Managed Code"
- .NET Framework not required (this is a static React app)

### 2. Build the Application
```powershell
npm run build
```

### 3. Deploy to IIS
1. Copy the entire `dist` folder contents to your IIS website directory
2. Ensure the following files are present:
   - `index.html` (main app entry point)
   - `web.config` (IIS configuration)
   - `404.html` (fallback for routing)
   - `assets/` folder (CSS, JS, and other assets)

### 4. IIS Configuration Requirements

#### Required IIS Modules:
- **URL Rewrite Module** (Download from Microsoft if not installed)
- **Static Content** (usually enabled by default)

#### Application Pool Settings:
- **.NET CLR Version**: No Managed Code
- **Managed Pipeline Mode**: Integrated
- **Identity**: ApplicationPoolIdentity (or your preferred identity)

### 5. Verify web.config is Working

The updated `web.config` includes:

```xml
<!-- URL Rewrite rules for React Router -->
<rewrite>
  <rules>
    <rule name="React Router" stopProcessing="true">
      <match url=".*" />
      <conditions logicalGrouping="MatchAll">
        <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
        <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
        <add input="{REQUEST_URI}" pattern="^/(api)" negate="true" />
        <add input="{REQUEST_URI}" pattern="^/(assets)" negate="true" />
        <add input="{REQUEST_URI}" pattern="\.[\w]+$" negate="true" />
      </conditions>
      <action type="Rewrite" url="/index.html" />
    </rule>
  </rules>
</rewrite>
```

## Testing Your Deployment

### 1. Test Direct URL Access
Try accessing these URLs directly in your browser:
- `http://yoursite.com/` (should load home page)
- `http://yoursite.com/about` (should load about page)
- `http://yoursite.com/courses` (should load courses page)
- `http://yoursite.com/contact` (should load contact page)

### 2. Test Navigation
- Click navigation links within the app
- Use browser back/forward buttons
- Refresh the page on any route

### 3. Test Assets
Check browser developer tools (F12) to ensure:
- All CSS files load without 404 errors
- All JS files load without 404 errors
- Images and videos load properly

## Common Issues and Solutions

### Issue: "HTTP Error 404 - File or directory not found"
**Solution**: 
- Ensure URL Rewrite Module is installed
- Verify web.config is in the root directory
- Check IIS application pool is running

### Issue: Assets not loading (CSS/JS 404 errors)
**Solution**:
- Verify `base: './'` is set in vite.config.js
- Ensure assets folder is copied to IIS directory
- Check MIME types are configured in web.config

### Issue: Routes work initially but fail on refresh
**Solution**:
- This indicates URL rewriting isn't working
- Verify URL Rewrite Module is installed and enabled
- Check web.config syntax is correct

### Issue: Console errors about MIME types
**Solution**:
- Our web.config includes all necessary MIME types
- Ensure the web.config file is being read by IIS

## Performance Optimizations Included

- **Compression**: Enabled gzip compression for faster loading
- **Caching**: Static files cached for 1 year
- **Code Splitting**: Vendor libraries separated for better caching
- **Minification**: All JS/CSS minified and optimized

## File Structure After Deployment

```
IIS Website Root/
├── index.html           # Main React app entry point
├── web.config          # IIS configuration
├── 404.html            # Fallback for routing issues
├── assets/             # All compiled assets
│   ├── index-[hash].css
│   ├── index-[hash].js
│   ├── vendor-[hash].js
│   ├── router-[hash].js
│   └── motion-[hash].js
└── [other static files]  # Images, videos, PDFs, etc.
```

## Security Considerations

- No server-side code execution required
- All assets served as static content
- HTTPS recommended for production deployment
- Consider adding security headers in web.config if needed

## Support

If you encounter issues:
1. Check IIS logs for detailed error messages
2. Verify URL Rewrite Module is installed
3. Test with a simple static HTML file first
4. Ensure application pool is running and configured correctly

---

Your React application should now work perfectly on IIS with full routing support!