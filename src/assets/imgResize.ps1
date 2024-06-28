# Ensure ImageMagick is installed and available in your PATH
# Open PowerShell and navigate to the folder containing your images

# Loop through all .jpg files in the current folder
Get-ChildItem *.webp | ForEach-Object {
    $imageName = $_.BaseName
    $inputImage = "$imageName.webp"
    $outputImage = "$imageName.webp"
    $Width = [int](magick identify -format %w $_)
    $Height = [int](magick identify -format %h $_)

    # echo $imageName $Width $Height
    # echo $inputImage
    # echo $outputImage
    #Run the ImageMagick command to resize the image and convert it to .webp
    if ( $Width -gt 200 -or $Height -gt 300 ) {
        echo "resize"
        magick $inputImage -resize 200x300 $outputImage
    }
    else {
        magick $inputImage $outputImage
    }
    
}

Write-Host "Image resizing and conversion completed."
