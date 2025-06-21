import requests
from bs4 import BeautifulSoup
import json

def get_university_details(url):
    """Extracts university details from its Wikipedia page."""
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")
    
    # Extract infobox if available
    infobox = soup.find("table", class_="infobox")
    location = "Unknown"
    
    if infobox:
        for row in infobox.find_all("tr"):
            header = row.find("th")
            data = row.find("td")
            if header and data:
                if "Location" in header.get_text():
                    location = data.get_text(strip=True)
                    break
    
    # Placeholder data for courses, scholarships, eligibility (actual scraping varies per university)
    courses_offered = [
        "B.Sc. in Computer Science",
        "B.Sc. in Computer Engineering",
        "M.Sc. in Computer Science",
        "M.Sc. in Computer Engineering"
    ]
    scholarships_offered = [
        "DAAD Scholarship",
        "Erasmus+ Scholarship"
    ]
    eligibility = (
        "Must have a recognized high school/bachelor’s degree, "
        "proof of English proficiency (IELTS 6.5 or TOEFL 80), "
        "and meet specific course prerequisites."
    )
    
    return {
        "location": location,
        "coursesOffered": courses_offered,
        "scholarshipsOffered": scholarships_offered,
        "eligibilityCriteriaForInternationalStudents": eligibility
    }

def scrape_universities_of_technology_in_germany():
    url = "https://en.wikipedia.org/wiki/List_of_universities_in_Germany"
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")
    
    heading = soup.find(["h2", "h3"], string=lambda t: t and "Universities of technology by location" in t)
    if not heading:
        print("Could not find the heading 'Universities of technology by location' on the page.")
        return []
    
    ul = heading.find_next("ul")
    if not ul:
        print("Could not find the list of universities after the heading.")
        return []
    
    li_tags = ul.find_all("li")
    results = []
    
    for li in li_tags:
        a_tag = li.find("a")
        if a_tag:
            university_name = a_tag.get_text(strip=True)
            university_url = "https://en.wikipedia.org" + a_tag["href"]
            
            print(f"Scraping {university_name}...")
            details = get_university_details(university_url)
            
            info = {
                "collegeName": university_name,
                "location": details["location"],
                "coursesOffered": details["coursesOffered"],
                "scholarshipsOffered": details["scholarshipsOffered"],
                "eligibilityCriteriaForInternationalStudents": details["eligibilityCriteriaForInternationalStudents"]
            }
            results.append(info)
    
    return results

if _name_ == "_main_":
    data = scrape_universities_of_technology_in_germany()
    print(json.dumps(data, indent=2, ensure_ascii=False))