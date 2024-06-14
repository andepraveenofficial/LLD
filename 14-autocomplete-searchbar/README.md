# AutoComplete Search Bar

### Features
1. Make Google Suggestions API call
2. show Suggestions
3. Debouncing - Decrease Too many API calls
   - If the difference between two keystrokes is more than 200ms then make API call.
4. Caching - Before making API call, just check result in Cache or not.
   - cache always is a object, because time complexity is O(1).
