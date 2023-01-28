# Personal Web-site: Adir Ben Shimol
**Adir Ben-Shimol | 315388850**
**3030 Advanced-Programming HW06**
Hi! this is my submission for Home-Work 06. I have developed a personal website includes various details and information about me.
sections:
- intro - my hobbies and a bit of introduction with me
- about - my resume, education and experience (some of it classified so I append dummies text)
- skills - my soft-skills
- contact - contact me form which sends an Email with the filled form fields

## How To Run
you can simply double-click on the **index.html** file.
however, it is more recommended to run it via simple http server using python.
open `terminal` in the root directory of my site and type this command:
> python -m http.server.
 
I append simple `run.sh` script that do the above.

this command start simple http server using python and invokes the **index.html page**. it usually serves it on port 8000 (however pay attention to pythons command output).
now, open your browser and browse localhost:port. for example:
>  localhost:8000



## Functionality

### Form Validation
- Simple HTML form validation on `subject` and `body` fields.
- `subject` - required and type 'text'
- `body` - required and up to 350 chars

### JavaScript
I use a few JavaScript function to handle the **get-cv popup** functionality.
-open and close the popup card - decide if to popup card or just serve default cv file in case of browsing from mobile devices or small screens devices.
-handle the cv files serving according to user selection.