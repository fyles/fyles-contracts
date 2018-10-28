const FileStorage = artifacts.require('../contracts/FileStorage.sol')

/**
 * @title Test coverage for FileStorage contract
 */
contract('FileStorage', function ([owner]) {

    // Contract instance
    let fs

    // Sample file 1
    const file1Hash = 'F26240C274C2ABCEA3258FCE6FAE0B2AF6F4045CEE50D140377F40F089DB0CB5'
    const file1Metadata = '0000000000000000000000000000000000000000000000000000000000002012'
    const file1HashFunction = '12'
    const file1HashSize = '20'
    const file1Type = 0
    
    // Sample file 2
    const file2Hash = '48E472EE1A129DD2B28677C40E6A0A94F6E64B820FD2E7E4FCC95B2010A32161'
    const file2Metadata = '0000000000000000000000000000000000000000000000000000000000031011'
    const file2HashFunction = '11'
    const file2HashSize = '10'
    const file2Type = 3

    /**
     * @dev Reset storage prior to each test
     */
    beforeEach('setup contract for each test', async function () {
        fs = await FileStorage.new()
    })

    /**
     * @dev Test the contract has an owner
     */
    it('has an owner', async function () {
        assert.equal(await fs.owner(), owner)
    })

    /**
     * @dev Test adding a new file hash object
     */
    it('adds a file hash object', async function () {
        await fs.addFile(parseInt(file1Hash, 16), parseInt(file1HashFunction, 16), parseInt(file1HashSize, 16), file1Type)
        let storedFileHash = await fs.getFileHash(0)
        assert.equal(storedFileHash, parseInt(file1Hash, 16), "File hashes should match.")
    })

    /**
     * @dev Test adding a new file metadata object
     */
    it('adds a file metadata object', async function () {
        await fs.addFile(parseInt(file1Hash, 16), parseInt(file1HashFunction, 16), parseInt(file1HashSize, 16), file1Type)
        let storedFileMetadata = await fs.getFileMetadata(0)

        // Hash function
        let storedFileHashFunction = storedFileMetadata.substring(64)
        assert.equal(storedFileHashFunction , file1HashFunction, "File hash functions should match.")
        
        // Hash size
        let storedFileHashSize = storedFileMetadata.substring(62, 64)
        assert.equal(storedFileHashSize , file1HashSize, "File hash sizes should match.")

        // File type
        let storedFileType = storedFileMetadata.substring(60, 62)
        assert.equal(storedFileType , file1Type, "File types should match.")
    })

    /**
     * @dev Test returning the correct file hash count
     */
    it('returns the correct file hash count', async function () {
        await fs.addFile(parseInt(file1Hash, 16), parseInt(file1HashFunction, 16), parseInt(file1HashSize, 16), file1Type)
        let storedFileHashCount = await fs.getFileHashCount()
        assert.equal(storedFileHashCount, 1, "File hash count should be 1.")

        await fs.addFile(parseInt(file2Hash, 16), parseInt(file2HashFunction, 16), parseInt(file2HashSize, 16), file2Type)
        storedFileHashCount = await fs.getFileHashCount()
        assert.equal(storedFileHashCount, 2, "File hash count should be 2.")
    })

    /**
     * @dev Test returning the correct file metadata count
     */
    it('returns the correct file metadata count', async function () {
        await fs.addFile(parseInt(file1Hash, 16), parseInt(file1HashFunction, 16), parseInt(file1HashSize, 16), file1Type)
        let storedFileMetadataCount = await fs.getFileMetadataCount()
        assert.equal(storedFileMetadataCount, 1, "File metadata count should be 1.")

        await fs.addFile(parseInt(file2Hash, 16), parseInt(file2HashFunction, 16), parseInt(file2HashSize, 16), file2Type)
        storedFileMetadataCount = await fs.getFileMetadataCount()
        assert.equal(storedFileMetadataCount, 2, "File metadata count should be 2.")
    })

    /**
     * @dev Test returning the correct file hash objects
     */
    it('returns the correct file hash objects', async function () {
        await fs.addFile(parseInt(file1Hash, 16), parseInt(file1HashFunction, 16), parseInt(file1HashSize, 16), file1Type)
        await fs.addFile(parseInt(file2Hash, 16), parseInt(file2HashFunction, 16), parseInt(file2HashSize, 16), file2Type)
        let storedFileHashes = await fs.getAllFileHashes()

        assert.equal(storedFileHashes[0], parseInt(file1Hash, 16), "File hash at index 0 should match first file.")
        assert.equal(storedFileHashes[1], parseInt(file2Hash, 16), "File hash at index 1 should match first file.")
    })

    /**
     * @dev Test returning the correct file metadata objects
     */
    it('returns the correct file metadata objects', async function () {
        await fs.addFile(parseInt(file1Hash, 16), parseInt(file1HashFunction, 16), parseInt(file1HashSize, 16), file1Type)
        await fs.addFile(parseInt(file2Hash, 16), parseInt(file2HashFunction, 16), parseInt(file2HashSize, 16), file2Type)
        let storedFileMetadata = await fs.getAllFileMetadata()

        assert.equal(storedFileMetadata[0], parseInt(file1Metadata, 16), "File metadata at index 0 should match first file.")
        assert.equal(storedFileMetadata[1], parseInt(file2Metadata, 16), "File metadata at index 1 should match first file.")
    })

    /**
     * @dev Test ability to enable/disable adding new files 
     */
    it('enables/disables adding new files ', async function () {
        await fs.addFile(parseInt(file1Hash, 16), parseInt(file1HashFunction, 16), parseInt(file1HashSize, 16), file1Type)
        let storedFileHashCount = await fs.getFileHashCount()
        let storedFileMetadataCount = await fs.getFileMetadataCount()
        assert.equal(storedFileHashCount, 1, "File hash count should be 1.")
        assert.equal(storedFileMetadataCount, 1, "File metadata count should be 1.")

        // Disable adding new files
        await fs.setCanAddFile(false)

        try {
            await fs.addFile(parseInt(file2Hash, 16), parseInt(file2HashFunction, 16), parseInt(file2HashSize, 16), file2Type)
            assert.fail()
        } catch (err) {
            assert(err.toString().includes('Contract must be accepting new files'), err.toString())
        }

        // Enable adding new files
        await fs.setCanAddFile(true)

        await fs.addFile(parseInt(file2Hash, 16), parseInt(file2HashFunction, 16), parseInt(file2HashSize, 16), file2Type)
        storedFileHashCount = await fs.getFileHashCount()
        storedFileMetadataCount = await fs.getFileMetadataCount()
        assert.equal(storedFileHashCount, 2, "File hash count should be 2.")
        assert.equal(storedFileMetadataCount, 2, "File metadata count should be 2.")
    })
})
