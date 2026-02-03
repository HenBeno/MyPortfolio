# הוראות העלאה ל-GitHub Pages

## שלב 1: אתחול Git Repository

פתח טרמינל בתיקיית הפרויקט והרץ:

```bash
# אתחול git repository
git init

# הוסף את כל הקבצים
git add .

# צור commit ראשוני
git commit -m "Initial commit: React portfolio with bilingual support"
```

## שלב 2: יצירת Repository ב-GitHub

1. לך ל-[GitHub](https://github.com) והתחבר לחשבון שלך
2. לחץ על כפתור **"New"** או **"+"** בפינה הימנית העליונה
3. מלא את הפרטים:
   - **Repository name**: `MyCVSite` (או כל שם שתרצה)
   - **Description**: "Portfolio website - Hen Benoish"
   - בחר **Public** (נדרש ל-GitHub Pages חינם)
   - **אל תיצור** README, .gitignore או רישיון (כבר יש לנו)
4. לחץ על **"Create repository"**

## שלב 3: חיבור ל-GitHub ו-Push

לאחר יצירת ה-repository, GitHub יציג לך הוראות. הרץ את הפקודות הבאות:

```bash
# הוסף את ה-remote (החלף USERNAME בשם המשתמש שלך)
git remote add origin https://github.com/USERNAME/MyCVSite.git

# שנה את שם ה-branch ל-main (אם צריך)
git branch -M main

# העלה את הקוד ל-GitHub
git push -u origin main
```

**הערה**: אם יש לך כבר repository בשם `MyCVSite`, השתמש בשם שלו.

## שלב 4: הגדרת GitHub Pages

### אופציה A: GitHub Actions (מומלץ - אוטומטי)

1. לך ל-repository ב-GitHub
2. לחץ על **Settings** (הגדרות)
3. בתפריט השמאלי, לחץ על **Pages**
4. תחת **Source**, בחר **GitHub Actions**
5. ה-GitHub Actions workflow כבר מוגדר בקובץ `.github/workflows/deploy.yml`
6. כל push ל-`main` branch יבנה ויעלה את האתר אוטומטית!

### אופציה B: Deploy ידני (אם Actions לא עובד)

```bash
# התקן את gh-pages (אם עדיין לא מותקן)
npm install

# בנה את הפרויקט והעלה ל-GitHub Pages
npm run deploy
```

**הערה**: עבור deploy ידני, תצטרך גם להגדיר את ה-Source ב-Settings → Pages ל-`gh-pages` branch.

## שלב 5: בדיקה

לאחר ה-deployment (אוטומטי או ידני), האתר יהיה זמין בכתובת:

```
https://USERNAME.github.io/MyCVSite/
```

**הערה**: זה יכול לקחת כמה דקות עד שהאתר יהיה זמין.

## פתרון בעיות

### אם GitHub Actions לא עובד:
1. ודא ש-GitHub Pages מופעל ב-Settings → Pages
2. ודא שה-Source מוגדר ל-**GitHub Actions**
3. בדוק את ה-Actions tab ב-repository לראות אם יש שגיאות

### אם יש שגיאות build:
1. בדוק את ה-`package.json` - ודא שכל ה-dependencies מותקנים
2. הרץ `npm install` מקומית כדי לוודא שהכל עובד
3. בדוק את ה-logs ב-GitHub Actions

### אם הנתיבים לא עובדים:
- ודא ש-`vite.config.ts` מכיל `base: '/MyCVSite/'` (או שם ה-repository שלך)
- אם שם ה-repository שונה, עדכן את ה-`base` path ב-`vite.config.ts`

## עדכונים עתידיים

לאחר ההגדרה הראשונית, כל פעם שתרצה לעדכן את האתר:

```bash
# בצע שינויים בקבצים
# ...

# הוסף את השינויים
git add .

# צור commit
git commit -m "Update portfolio content"

# העלה ל-GitHub
git push
```

GitHub Actions יבנה ויעלה את האתר אוטומטית!
