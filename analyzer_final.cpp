#include <stdio.h>
#include <string.h>

int main() {
    int choice, i, j, found, gap = 0, n;

    char userSkills[5][50];

    // Job role skills
    char ai[5][50] = {"Python", "Machine Learning", "Statistics", "Communication", "Deep Learning"};
    char data[5][50] = {"Excel", "SQL", "Python", "Communication", "Data Visualization"};
    char dev[5][50] = {"C", "Java", "Data Structures", "Communication", "OOP"};
    char web[5][50] = {"HTML", "CSS", "JavaScript", "React", "Communication"};
    char cyber[5][50] = {"Networking", "Security", "Linux", "Python", "Communication"};

    char required[5][50];

    printf("------ Skill Gap Analyzer ------\n");

    printf("Choose job role:\n");
    printf("1. AI Engineer\n");
    printf("2. Data Analyst\n");
    printf("3. Software Developer\n");
    printf("4. Web Developer\n");
    printf("5. Cyber Security\n");
    printf("Enter your choice: ");
    scanf("%d", &choice);
    getchar(); // clear newline

    // Assign required skills
    switch(choice) {
        case 1:
    for(i = 0; i < 5; i++)
        strcpy(required[i], ai[i]);
    break;
    
    case 2:
    for(i = 0; i < 5; i++)
        strcpy(required[i], data[i]);
    break;

    case 3:
    for(i = 0; i < 5; i++)
        strcpy(required[i], dev[i]);
    break;

    case 4:
    for(i = 0; i < 5; i++)
        strcpy(required[i], web[i]);
    break;

    case 5:
    for(i = 0; i < 5; i++)
        strcpy(required[i], cyber[i]);
    break;
        default:
            printf("Invalid choice!");
            return 0;
    }

    // Input number of skills
    printf("\nHow many skills do you have? : ");
    scanf("%d", &n);
    getchar();

    if(n > 5) n = 5;

    // Input skills
    printf("Enter your skills:\n");
    for(i = 0; i < n; i++) {
        printf("Skill %d: ", i+1);
        fgets(userSkills[i], 50, stdin);
        userSkills[i][strcspn(userSkills[i], "\n")] = 0; // remove newline
    }

    // Display user skills
    printf("\nYour Skills:\n");
    for(i = 0; i < n; i++) {
        printf("- %s\n", userSkills[i]);
    }

    // Display required skills
    printf("\nRequired Skills:\n");
    for(i = 0; i < 5; i++) {
        printf("- %s\n", required[i]);
    }

    // Find missing skills
    printf("\nMissing Skills:\n");

    for(i = 0; i < 5; i++) {
        found = 0;

        for(j = 0; j < n; j++) {
            if(strcmp(required[i], userSkills[j]) == 0) {
                found = 1;
                break;
            }
        }

        if(found == 0) {
            printf("- %s\n", required[i]);
            gap++;
        }
    }

    printf("\nYou are missing %d skill(s).\n", gap);

    return 0;
}
