# Ensure ImageMagick is installed and available in your PATH
# Open PowerShell and navigate to the folder containing your images

# Loop through all .jpg files in the current folder
Get-ChildItem *.jpg | ForEach-Object {
    $imageName = $_.BaseName
    $inputImage = "$imageName.jpg"
    $outputImage = "$imageName.webp"
    $Width = magick identify -format "%[w]" $_
    $Height = magick identify -format "%[h]" $_

    # echo $imageName
    # echo $inputImage
    # echo $outputImage
    Run the ImageMagick command to resize the image and convert it to .webp
    if ($Width -gt 300 -or $Height -gt 500) {
        magick $inputImage -resize 300x500 $outputImage
    }
    else {
        magick $inputImage $outputImage
    }
    
}

Write-Host "Image resizing and conversion completed."
